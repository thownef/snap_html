import { notification } from 'antd'
import { camelizeKeys } from 'humps'
import Cookies from 'js-cookie'
import { ResponseError } from '@/shared/core/types/common.type'
import { HttpErrorCodeEnum } from '@/shared/core/enum/http-error-code.enum'
import { useBoundStore } from '@/shared/stores'
import { handleServerError, handleServerSuccess } from '@/shared/utils/handle-response-server'
import { globalNavigate } from '@/shared/hooks/useNavigation'
import { refreshToken } from '@/shared/services/auth.service'
import { axiosInstance } from '@/shared/services'
import { convertTimestampToDays } from '@/shared/utils'

let refreshTokenPromise: Promise<string> | null = null

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
export const axiosInterceptorResponseError = async (error: ResponseError) => {
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

  if (status === HttpErrorCodeEnum.UNAUTHORIZED) {
    if (window.location.pathname.includes('/login')) {
      useBoundStore.getState().resetProfile()
      globalNavigate('/login')
      const { config } = error
      handleServerError(config.method, 'Email or password is incorrect')
      return Promise.reject(error)
    } else {
      try {
        if (!refreshTokenPromise) {
          refreshTokenPromise = refreshToken({
            refreshToken: Cookies.get('refreshToken')
          })
            .then((response) => {
              const { accessToken, refreshToken: newRefreshToken, expiresAt } = response.data.data
              Cookies.set('accessToken', accessToken, { 
                secure: true,
                sameSite: 'strict'
              })
              Cookies.set('refreshToken', newRefreshToken, {
                secure: true,
                sameSite: 'strict',
                expires: convertTimestampToDays(expiresAt)
              })
              return accessToken
            })
            .finally(() => {
              refreshTokenPromise = null
            })
        }

        const newAccessToken = await refreshTokenPromise
        return axiosInstance({
          ...error.config,
          headers: { ...error.config.headers, Authorization: `Bearer ${newAccessToken}` }
        })
      } catch (refreshError) {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        globalNavigate('/login')
        return Promise.reject(refreshError)
      }
    }
  }
  if (status === HttpErrorCodeEnum.NOT_FOUND) {
    globalNavigate('/not-found')
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
