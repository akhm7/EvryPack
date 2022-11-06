<template>
  <div class="flex gap-4 shadow-md rounded-md p-4">
    <div>
      <img :src="product.img" alt="" class="h-28 rounded-md" />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <p class="font-semibold">{{ product.name }}</p>
      <p><span class="text-orange-300">$</span> {{ product.price }}</p>
      <div class="mt-auto flex gap-2 w-full">
        <button class="border px-2 rounded-md" @click="decrementCount">
          -
        </button>
        <p>{{ productCount }}</p>
        <button class="border px-2 rounded-md" @click="incrementCount">
          +
        </button>
        <button @click="cartStore.addToCart(product.id, productCount)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

defineProps({
  product: Object,
});
const productCount = ref(1);
const cartStore = useCartStore();

const incrementCount = () => productCount.value++;
const decrementCount = () => {
  if (productCount.value === 1) return;
  productCount.value--;
};
</script>
