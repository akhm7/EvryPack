<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";
import { getCategories, getProducts } from "@/api/db";
import ProductCard from "@/components/ProductCard.vue";

const route = useRoute();
const { categoryId } = route.params;

inject("setTitle")(getCategories()[+categoryId].title);
</script>

<template>
  <main class="container px-4 py-6">
    <div class="flex flex-col w-full gap-5">
      <ProductCard
        v-for="product in getProducts(+categoryId)"
        :key="product.id"
        :product="product"
        class="bg-yellow-50"
      ></ProductCard>
    </div>
  </main>
</template>
