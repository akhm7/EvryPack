<script setup>
import { inject } from "vue";
import { useOrdersStore } from "@/stores/orders";
import OrderItem from "@/components/OrderItem.vue";

const ordersStore = useOrdersStore();

inject("setTitle")("Список заказов");
</script>

<template>
  <main class="container px-4 py-6">
    <div class="flex flex-col w-full gap-5">
      <OrderItem
        v-for="order in ordersStore.getOrders()"
        :key="order.id"
        :orderId="order.id"
      ></OrderItem>
    </div>
  </main>
</template>
