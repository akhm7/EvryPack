<template>
  <nav class="bg-yellow-300 px-4 py-2 w-full shadow-md">
    <ul class="flex justify-between items-center text-slate-900 text-lg">
      <li>
        <router-link to="/" class="font-bold truncate"><font-awesome-icon icon="fa-solid fa-box" /> EvryPack </router-link>
      </li>
      <li class="font-normal"><font-awesome-icon icon="fa-solid fa-angle-right" /> {{ pageTitle }}</li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  pageTitle: String,
});
</script>
