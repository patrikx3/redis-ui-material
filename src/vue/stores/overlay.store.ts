import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOverlayStore = defineStore('overlay', () => {
    const visible = ref(false)
    const message = ref('')

    function show(options?: { message?: string }) {
        visible.value = true
        message.value = options?.message || ''
    }

    function hide() {
        visible.value = false
        message.value = ''
    }

    return {
        visible,
        message,
        show,
        hide,
    }
})
