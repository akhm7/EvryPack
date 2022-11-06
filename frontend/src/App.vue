<script setup>
import { RouterView } from "vue-router";
import { provide, ref } from "vue";
import TheAppHeader from "@/components/TheAppHeader.vue";
import TheFooter from "@/components/TheAppFooter.vue";

const pageTitle = ref("");

const setPageTitle = (title) => {
  pageTitle.value = title;
};

provide("setTitle", setPageTitle);
</script>

<template>
  <div class="relative overflow-hidden">
    <TheAppHeader :page-title="pageTitle" />
    <RouterView />
    <div class="pb-14"></div>
    <TheFooter />
  </div>
</template>
