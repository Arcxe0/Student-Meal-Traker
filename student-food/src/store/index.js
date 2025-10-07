import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(item) {
      if (!this.items.includes(item)) {
        this.items.push(item)
      }
    },
    removeItem(item) {
      this.items = this.items.filter(i => i !== item)
    },
    clearBasket() {
      this.items = []
    }
  }
})
