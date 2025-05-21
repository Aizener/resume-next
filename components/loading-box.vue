<script setup lang="ts">
</script>

<template>
  <div class="w-full h-full p-4 flex-vertical flex-center">
    <div class="w-32 h-32 loading border-4 border-green-600 border-r-transparent rounded-full flex-center relative">
      <div class="w-26 h-26 loading-child border-4 border-green-600 border-l-transparent rounded-full" />
    </div>
    <p class="text text-md text-green-700 font-bold -mt-2 absolute">加载中</p>
    <p class="text text-sm text-green-700 font-bold mt-6 absolute">Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  animation: rotate 2s infinite linear;
}
.loading-child {
  animation: rotate-child 1s infinite linear;
}
@keyframes rotate {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
@keyframes rotate-child {
  0% { transform: rotate(0); }
  100% { transform: rotate(-360deg); }
}
</style>