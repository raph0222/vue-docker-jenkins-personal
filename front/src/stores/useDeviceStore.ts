import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('deviceStore', {
    state: () => ({
      isMobile: window.innerWidth <= 768,
    }),
    actions: {
        setIsMobile() {
          this.isMobile = window.innerWidth <= 768
        },
        initResizeListener() {
          window.addEventListener('resize', this.setIsMobile)
        },
        removeResizeListener() {
          window.removeEventListener('resize', this.setIsMobile)
        },
      },
    getters: {
        getIsMobile(): boolean {
            return this.isMobile
        }
    }
  })