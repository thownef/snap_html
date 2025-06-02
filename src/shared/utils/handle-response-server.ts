import { notification } from 'antd'

type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export const handleServerError = (method: HttpMethod, message: string) => {
  switch (method) {
    case 'post':
      notification.error({
        message: message
      })
      return
    default:
      return
  }
}

export const handleServerSuccess = (method: HttpMethod, message?: string) => {
  const messageLogin = window.location.pathname.includes('login') ? 'Login successful' : ''

  switch (method) {
    case 'post':
      notification.success({
        message: messageLogin || message || 'Created successfully.'
      })
      return
    case 'put':
      notification.success({
        message: message || 'Updated successfully.'
      })
      return
    case 'delete':
      notification.success({
        message: message || 'Deleted successfully.'
      })
      return
    default:
      return
  }
}
