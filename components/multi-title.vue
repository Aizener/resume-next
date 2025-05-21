<script setup lang="ts">
const props = defineProps<{
  title: string,
  subtitle: string
}>();
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex-vertical">
      <h2 class="text-xl font-bold">{{ props.title }}</h2>
      <p class="text-sm text-neutral-500 mt-1">{{ props.subtitle }}</p>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
</style>