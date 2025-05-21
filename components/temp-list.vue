<script setup lang="ts">
const props = defineProps<{
  title: string,
  data: Template[]
}>();
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <h2 class="text-3xl font-bold max-lg:text-2xl">{{ props.title }}</h2>
    <div class="w-full grid grid-cols-4 gap-6 mt-12 max-lg:grid-cols-2 max-lg:px-2 max-lg:mt-6">
      <div
        v-for="(item, idx) in props.data"
        :key="idx"
        class="border border-neutral-200 shadow-md shadow-neutral-100 w-full"
      >
        <TempCover :name="item.path" class="w-full h-64 max-lg:h-48" />
        <div class="border-t border-neutral-200 text-center py-4 max-lg:py-2">
          <NuxtLink
            class="cursor-pointer"
            @click="toResumeCreatePage(item)"
          >即刻使用</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>