import { ApiService } from '@/shared/services'

const BaseUrl = 'auth'

export function login(body: any) {
  return ApiService.post(`${BaseUrl}/login`, body).then((resp) => resp)
}

export function register(body: any) {
  return ApiService.post(`${BaseUrl}/register`, body).then((resp) => resp)
}

export function refreshToken(body: any) {
  return ApiService.post(`${BaseUrl}/refresh-token`, body).then((resp) => resp)
}
