import { defineStore } from "pinia";
import { getProductInfo } from "@/api/db";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: new Map(),
  }),
  actions: {
    addToCart(productId, productQuantity) {
      const currentQuantity = this.cartItems.get(productId) ?? 0;
      this.cartItems.set(productId, currentQuantity + productQuantity);
    },

    getProducts() {
      return Array.from(this.cartItems.keys()).map((productId) =>
        getProductInfo(+productId)
      );
    },

    getProductQuantity(productId) {
      return this.cartItems.get(productId) ?? 0;
    },

    setProductQuantity(productId, productQuantity) {
      if (productQuantity < 0) return;
      this.cartItems.set(productId, productQuantity);
    },

    removeFromCart() {},
  },
  getters: {
    getTotalCost: (state) =>
      Array.from(state.cartItems.keys()).reduce(
        (sum, productId) =>
          sum +
          state.cartItems.get(productId) * getProductInfo(+productId).price,
        0
      ),
  },
});
