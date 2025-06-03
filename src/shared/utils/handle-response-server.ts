import toast from 'react-hot-toast'

type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export const handleServerError = (method: HttpMethod, message: string) => {
  switch (method) {
    case 'post':
      toast.error(message)
      return
    default:
      return
  }
}

export const handleServerSuccess = (method: HttpMethod, message?: string) => {
  const messageLogin = window.location.pathname.includes('login') ? 'Login successful' : ''

  switch (method) {
    case 'post':
      toast.success(messageLogin || message || 'Created successfully.')
      return
    case 'put':
      toast.success(message || 'Updated successfully.')
      return
    case 'delete':
      toast.success(message || 'Deleted successfully.')
      return
    default:
      return
  }
}
