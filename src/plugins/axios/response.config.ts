import { notification } from 'antd'
import { camelizeKeys } from 'humps'
import { ResponseError } from '@/shared/core/types/common.type'
import { HttpErrorCodeEnum } from '@/shared/core/enum/http-error-code.enum'
import { useBoundStore } from '@/shared/stores'
import { handleServerError, handleServerSuccess } from '@/shared/utils/handle-response-server'
import { globalNavigate } from '@/shared/hooks/useNavigation'

// Config Response Interceptor
export const axiosInterceptorResponseConfig = (response: any) => {
  const { countRequest, decrementCountRequest, setIsLoading, resetCountRequest } = useBoundStore.getState()

  decrementCountRequest()
  if (countRequest <= 0) {
    setIsLoading(false)
    resetCountRequest()
  }
  if (response.data?.data) {
    const { data } = response.data

    response.data.data = camelizeKeys(data)
  }
  handleServerSuccess(response?.config?.method)

  return response
}

// Config Response Error Interceptor
export const axiosInterceptorResponseError = (error: ResponseError) => {
  const { countRequest, decrementCountRequest, setIsLoading, resetCountRequest } = useBoundStore.getState()

  decrementCountRequest()
  if (countRequest <= 0) {
    setIsLoading(false)
    resetCountRequest()
  }
  const resError = JSON.parse(JSON.stringify(error))

  // Timeout web
  if (resError?.message?.includes('timeout of 30000ms exceeded')) {
    // TODO: Handle timeout
  }
  const { status } = error.response || { status: 500 }

  // Redirect to Error Page
  if (status === HttpErrorCodeEnum.UNAUTHORIZED) {
    const { config } = error

    handleServerError(config.method, 'Email or password is incorrect')
  }
  if (status === HttpErrorCodeEnum.NOT_FOUND) {
    // globalNavigate("/not-found");
  }

  if (status === HttpErrorCodeEnum.FORBIDDEN || Math.floor(status / 100) === 5) {
    // Redirect Error Page
  }

  if (status === HttpErrorCodeEnum.UNPROCESSABLE_CONTENT) {
    const { data: errors } = error.response || {}

    return Promise.reject(errors)
  }

  if (status === HttpErrorCodeEnum.SERVER_ERROR) {
    const { data } = error.response || {}

    if (data?.url_return) {
      globalNavigate(data.url_return)
    } else {
      handleServerError(error.config.method, 'System Error')
    }
  }

  if (status === HttpErrorCodeEnum.BAD_REQUEST) {
    notification.error({
      message: 'System Error'
    })
  }

  return Promise.reject(error)
}
