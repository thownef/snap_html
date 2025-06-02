import { StateCreator } from 'zustand'

export interface ILoadingSlice {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  countRequest: number
  incrementCountRequest: () => void
  decrementCountRequest: () => void
  resetCountRequest: () => void
}

export const createLoadingSlice: StateCreator<ILoadingSlice, [], [], ILoadingSlice> = (set) => ({
  isLoading: false,
  countRequest: 0,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  incrementCountRequest: () => set((state) => ({ countRequest: state.countRequest + 1 })),
  decrementCountRequest: () => set((state) => ({ countRequest: state.countRequest - 1 })),
  resetCountRequest: () => set(() => ({ countRequest: 0 }))
})
