import { create } from 'zustand'

interface OverlayState {
    visible: boolean
    message: string
    show: (options?: { message?: string }) => void
    hide: () => void
}

export const useOverlayStore = create<OverlayState>((set) => ({
    visible: false,
    message: '',

    show: (options?: { message?: string }) => {
        set({ visible: true, message: options?.message || '' })
    },

    hide: () => {
        set({ visible: false, message: '' })
    },
}))
