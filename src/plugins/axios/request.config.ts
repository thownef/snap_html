import { decamelizeKeys } from 'humps'
import { useBoundStore } from '@/shared/stores'

// Config Axios
export const axiosConfig = {
  baseURL: import.meta.env.VITE_APP_ROOT_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
}

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config: any) => {
  const { incrementCountRequest, setIsLoading } = useBoundStore.getState()
  incrementCountRequest()
  setIsLoading(true)

  if (config.data && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = decamelizeKeys(config.data)
  }

  if (config.params) {
    config.params = decamelizeKeys(config.params)
  }

  if (localStorage.getItem('accessToken')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }

  return config
}

// Config Request Error Interceptor
export const axiosInterceptorRequestError = (error: any) => {
  const { countRequest, decrementCountRequest, setIsLoading, resetCountRequest } = useBoundStore.getState()

  decrementCountRequest()

  if (countRequest <= 0) {
    setIsLoading(false)
    resetCountRequest()
  }

  return Promise.reject(error)
}
