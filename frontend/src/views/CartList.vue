<script setup>
import { inject } from "vue";
import { useCartStore } from "@/stores/cart";
import CartItem from "@/components/CartItem.vue";

const cartStore = useCartStore();

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
    <p><span class="font-semibold">День недели:</span>
      <select name="week" class="ml-5">
        <option value="1">Понедельник</option>
        <option value="2">Вторник</option>
        <option value="3">Среда</option>
        <option value="4">Четверг</option>
        <option value="5">Пятница</option>
        <option value="6">Суббота</option>
        <option value="7">Воскресенье</option>
      </select>
    </p>
    <p><span class="font-semibold">Время:</span> <input type="time" class="ml-5" id="time" name="time"></p>
    <hr class="mt-2 borde" />
    <p><span class="font-semibold">Итого:</span> {{ cartStore.getTotalCost }} $</p>
    <button class="border bg-green-500 px-3 py-1 mt-2 w-full shadow-md rounded font-semibold text-white">Set order</button>
  </main>
</template>
