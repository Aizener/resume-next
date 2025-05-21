<script setup lang="ts">
prerenderRoutes(['/about', '/contact']);
</script>

<template>
  <div id="app">
    <UApp
      :toaster="{
        position: 'top-right'
      }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(30px);
}
</style>
