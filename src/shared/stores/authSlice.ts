import { StateCreator } from 'zustand'
import Cookies from 'js-cookie'
import { User } from '@/shared/core/types/user.type'
import { convertSecondsToDays } from '@/shared/utils'

export interface IAuthSlice {
  user: null | User
  userLogin: (user: User, token: string, refreshToken: string, expiresAt: number) => void
  resetProfile: () => void
  userProfile: (user: User) => void
}

export const createAuthSlice: StateCreator<IAuthSlice, [], [], IAuthSlice> = (set) => ({
  user: null,
  userLogin: (user, token, refreshToken, expiresAt) =>
    set(() => {
      Cookies.set('accessToken', token, { 
        secure: true,
        sameSite: 'strict'
      })
      Cookies.set('refreshToken', refreshToken, {
        secure: true,
        sameSite: 'strict',
        expires: convertSecondsToDays(expiresAt)
      })

      return { user }
    }),
  resetProfile: () =>
    set(() => {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')

      return {
        user: null
      }
    }),
  userProfile: (user) => set(() => ({ user }))
})
