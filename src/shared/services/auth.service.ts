import { ApiService } from '@/shared/services'

const BaseUrl = 'auth'

export function getProfile() {
  return ApiService.get(`${BaseUrl}/me`).then((resp) => resp)
}

export function refreshToken(body: any) {
  return ApiService.post(`${BaseUrl}/refresh-token`, body).then((resp) => resp)
}