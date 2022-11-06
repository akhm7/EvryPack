<script setup>
import { inject, ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { useOrdersStore } from "@/stores/orders";
import CartItem from "@/components/CartItem.vue";

const cartStore = useCartStore();
const ordersStore = useOrdersStore();

inject("setTitle")("Корзина");

const dayOfWeek = ref ("");
const time = ref ("");

const setOrder = () => {
  ordersStore.createOrder(cartStore.getCart(), dayOfWeek.value, time.value);
  cartStore.cleanCart();
  dayOfWeek.value = "";
  time.value = "";
};
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
    <hr class="mt-4 border" />
    <p><span class="font-semibold">День недели:</span>
      <select name="week" v-model="dayOfWeek" class="ml-5">
        <option>Понедельник</option>
        <option>Вторник</option>
        <option>Среда</option>
        <option>Четверг</option>
        <option>Пятница</option>
        <option>Суббота</option>
        <option>Воскресенье</option>
      </select>
    </p>
    <p><span class="font-semibold">Время:</span> <input type="time" class="ml-5" id="time" name="time" v-model="time" ></p>
    <hr class="mt-2 borde" />
    <p><span class="font-semibold">Итого:</span> {{ cartStore.getTotalCost }} <span class="text-orange-400">$/нед.</span></p>
    <button class="border bg-green-500 px-3 py-1 mt-2 w-full shadow-md rounded font-semibold text-white" @click="setOrder">Заказать</button>
  </main>
</template>
