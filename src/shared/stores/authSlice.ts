import { StateCreator } from 'zustand'
import { User } from '@/shared/core/types/user.type'

export interface IAuthSlice {
  user: null | User
  userLogin: (user: User, token: string) => void
  resetProfile: () => void
  userProfile: (user: User) => void
}

export const createAuthSlice: StateCreator<IAuthSlice, [], [], IAuthSlice> = (set) => ({
  user: null,
  userLogin: (user, token) =>
    set(() => {
      localStorage.setItem('accessToken', token)

      return { user }
    }),
  resetProfile: () =>
    set(() => {
      localStorage.removeItem('accessToken')

      return {
        user: null
      }
    }),
  userProfile: (user) => set(() => ({ user }))
})
