import { defineStore } from "pinia";
import { getProductInfo } from "@/api/db";

export const useOrdersStore = defineStore("order", {
  state: () => ({
    orders: new Map(),
    orderId: 0
  }),
  actions: {
    createOrder(cart, dayOfWeek, time) {
        this.orders.set(this.orderId,{id:this.orderId, cart:cart, dayOfWeek: dayOfWeek, time:time});
        this.orderId++;
    },
    deleteOrder(orderId) {
        this.orders.delete(orderId);
    },
    getOrders() {
        return Array.from(this.orders.values());
    },
    getOrder(orderId) {
        return this.orders.get(orderId);
    },
    getProducts(orderId) {
        return Array.from(this.orders.get(orderId).cart.keys()).map(productId => ({
            count: this.orders.get(orderId).cart.get(productId),
            info: getProductInfo(+productId)
        }));
    },
    getProductQuantity(orderId, productId) {
        return this.orders.get(orderId)?.cart.get(productId) ?? 0;
    },
    setProductQuantity(orderId, productId, productQuantity) {
        if (productQuantity < 0) return;
        this.orders.get(orderId)?.cart.set(productId, productQuantity);
    },
    getTotalCost(orderId) {
        return Array.from(this.orders.get(orderId)?.cart.keys() ?? []).reduce(
            (sum, productId) =>
                sum +
                this.orders.get(orderId).cart.get(productId) * getProductInfo(+productId).price,
            0
        );
    }
  },
});
