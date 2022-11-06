<!-- <template>
  <footer class="fixed bottom-0 z-[9999] bg-black w-full h-12 text-white">
    <router-link to="/cart">Cart</router-link>
  </footer>
</template> -->
<template>
  <footer class="">
    <div class="w-full h-screen shadow-md">
	<!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-yellow-300 shadow">
      <div id="tabs" class="flex justify-between">
        <a href="/" class="w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon icon="fa-solid fa-home" />
          <span class="tab tab-home block text-xs">Главная</span>
        </a>
        <a href="/" class="w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon icon="fa-solid fa-shopping-bag" />
          <span class="tab tab-kategori block text-xs">Категории</span>
        </a>
        <a href="/cart" class="w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon icon="fa-solid fa-shopping-cart" />
          <span class="tab tab-whishlist block text-xs">Корзина</span>
        </a>
        <a href=# class="w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon icon="fa-solid fa-user" />
          <span class="tab tab-account block text-xs">Профиль</span>
        </a>
      </div>
    </section>
  </div>
  </footer>
</template>

<script>
</script>


<script setup></script>
