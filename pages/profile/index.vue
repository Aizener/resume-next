<script setup lang="ts">
const route = useRoute();

const pages = ref([
  { title: '我的简历', path: '/profile/resume' },
  { title: '生成记录', path: '/profile/generate' },
  { title: '下载记录', path: '/profile/download' },
  // { title: '个人信息', path: '/profile/info' },
]);

const getActiveClass = (path: string) => {
  return route.path === path ? 'bg-blue-500 text-white' : 'bg-neutral-100';
}

definePageMeta({
  redirect: '/profile/resume'
});
</script>

<template>
  <div class="w-[1000px] mt-6 mx-auto shadow-md shadow-neutral-200 border-t border-neutral-100 rounded-md p-6 flex gap-x-6 h-[80dvh] max-lg:w-full max-lg:flex-col max-lg:p-2">
    <div class="w-36 border-r border-neutral-200 max-lg:w-full max-lg:border-0 max-lg:border-b max-lg:mb-4 max-lg: pb-2">
      <nav class="flex-vertical gap-y-4 pr-6 max-lg:flex-row max-lg:gap-x-2">
        <div
          v-for="(item, idx) in pages"
          :key="idx"
          class="rounded-md h-10 text-neutral-800 transition-colors max-lg:flex-1"
          :class="[getActiveClass(item.path)]"
        >
          <NuxtLink
            :to="item.path"
            class="text-sm w-full h-10 flex-center select-none"
          >{{ item.title }}</NuxtLink>
        </div>
      </nav>
    </div>
    <main class="flex-1 h-full">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
</style>