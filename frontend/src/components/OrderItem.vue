<template>
    <div class="flex gap-4 shadow-md rounded-md p-4">
      <div class="flex flex-col flex-1">
        <p><span class="font-semibold">День недели:</span> {{ order.dayOfWeek }}</p>
        <p><span class="font-semibold">Время:</span> {{ order.time }}</p>
        <p><span class="font-semibold">Сумма:</span> {{ totalCost }} <span class="text-orange-400">$/нед.</span></p>
        <span class="mt-3"></span>
        <p>{{products}}</p>
        <p class="grid grid-cols-2 gap-2 mt-2">
            <button class="border bg-yellow-500 px-3 py-1 mt-2 w-full shadow-md rounded font-normal text-black">Редактировать</button>
            <button class="border bg-red-500 px-3 py-1 mt-2 w-full shadow-md rounded font-normal text-white">Отписаться</button>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useOrdersStore } from "@/stores/orders";
  
  const props = defineProps({
    orderId: Number,
  });
  const ordersStore = useOrdersStore();
  const order = ordersStore.getOrder(props.orderId); 
  const totalCost = ordersStore.getTotalCost(props.orderId);
  const products = ordersStore.getProducts(props.orderId).map(product => `${product.info.name} x ${product.count}`).join(', ');
  </script>
  