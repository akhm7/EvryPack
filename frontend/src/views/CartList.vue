<script setup>
import { inject } from "vue";
import { useCartStore } from "@/stores/cart";
import CartItem from "@/components/CartItem.vue";

const cartStore = useCartStore();

console.log(cartStore.getTotalCost);

inject("setTitle")("Корзина");
</script>

<template>
  <main class="container px-4 py-6">
    <div class="flex flex-col w-full gap-5">
      <CartItem
        v-for="product in cartStore.getProducts()"
        :key="product.id"
        :product="product"
      ></CartItem>
    </div>
    <hr class="mt-4 borde" />
    <p>Total cost: {{ cartStore.getTotalCost }}</p>
    <button>Set order</button>
  </main>
</template>
