import { create } from 'zustand'
import { createAuthSlice, IAuthSlice } from '@/shared/stores/authSlice'
import { createLoadingSlice, ILoadingSlice } from '@/shared/stores/loadingSlice'

export type CommonState = IAuthSlice & ILoadingSlice

export const useBoundStore = create<CommonState>((...a) => ({
  ...createAuthSlice(...a),
  ...createLoadingSlice(...a)
}))
