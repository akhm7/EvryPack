<template>
  <div class="flex gap-4 shadow-md rounded-md p-4">
    <div>
      <img :src="product.img" alt="Fashion" class="h-28" />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <p class="font-semibold">{{ product.name }}</p>
      <p><span class="text-orange-400">$</span> {{ product.price }}</p>
      <div class="mt-auto flex gap-2 w-full">
        <button class="border px-2 rounded-md" @click="decrementCount">
          -
        </button>
        <p>{{ cartStore.getProductQuantity(product.id) }}</p>
        <button class="border px-2 rounded-md" @click="incrementCount">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";

const props = defineProps({
  product: Object,
});
const cartStore = useCartStore();

const incrementCount = () => {
  const productQuantity = cartStore.getProductQuantity(props.product.id);
  cartStore.setProductQuantity(props.product.id, productQuantity + 1);
};
const decrementCount = () => {
  const productQuantity = cartStore.getProductQuantity(props.product.id);
  cartStore.setProductQuantity(props.product.id, productQuantity - 1);
};
</script>
