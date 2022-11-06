<template>
  <div class="grid grid-cols-2 justify-center gap-4 p-4">
    <div
      v-for="category in getCategories()"
      :key="category.id"
      class="shadow-md rounded-md text-center py-2 bg-yellow-200 font-semibold"
      @click="
        router.push({ name: 'products', params: { categoryId: category.id } })
      "
    >
      <img
        :src=category.img
        alt="Category image"
        class="h-auto mx-auto"
      />
      <p class="text-sm pt-2">{{ category.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import { getCategories } from "@/api/db";

const router = useRouter();

inject("setTitle")("Категории");
</script>
