<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const navs = ref<RouteLink[]>([
  { title: '首页', path: '/' },
  { title: '模板列表', path: '/temp-list' },
  { title: '关于本站', path: '/about' },
  { title: '联系我', path: '/contact' },
]);
const websiteStore = useWebsiteStore();
const deviceType = useState('deviceType');
const showMobileNav = ref(false);

watch(() => showMobileNav.value, (isShow: boolean) => {
  if (isShow) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

const username = computed(() => websiteStore.user?.username);

const isActiveRoute = (path: string) => {
  return route.path === path;
};

const handleStart = () => {
  router.push('/resume/create');
}
</script>

<template>
  <div class="layout w-full flex-vertical items-center pt-24 max-lg:pt-16">
    <header v-if="deviceType === 'web'" class="header-same h-24 px-12">
      <h1 class="text-5xl" @click="toHomePage">JiKE</h1>
      <div class="flex items-center gap-12">
        <nav class="flex items-center gap-12 translate-y-0.5 border-r border-neutral-400 pr-12">
          <NuxtLink
            v-for="(item, idx) in navs"
            :key="idx"
            :to="item.path"
            class="text-[18px] cursor-pointer hover:text-green-600"
            :class="[isActiveRoute(item.path) ? 'text-green-600' : 'text-slate-800']"
          >{{ item.title }}</NuxtLink>
        </nav>
        <div class="flex items-center gap-6">
          <span v-if="username">{{ username }}</span>
          <NuxtLink v-else to="/logreg" class="text-slate-800 translate-y-0.5 underline hover:text-green-500">登入</NuxtLink>
          <div class="flex gap-x-2">
            <UButton v-if="username" size="lg" color="info" class="cursor-pointer">
              <NuxtLink to="/profile">我的记录</NuxtLink>
            </UButton>
            <UButton
              trailing-icon="i-lucide-arrow-right"
              size="lg"
              class="cursor-pointer"
              @click="handleStart"
            >即刻开始</UButton>
          </div>
        </div>
      </div>
    </header>
    <header v-if="deviceType === 'mobile'" class="header-same h-16 px-6">
      <h1 class="text-3xl" @click="toHomePage">JiKE</h1>
      <i class="iconfont icon-qita" style="font-size: 26px;" @click="showMobileNav = true" />
      <Transition name="slide">
        <div v-show="showMobileNav" class="fixed left-0 top-0 w-full h-full bg-white z-50">
          <nav class="w-full h-full flex-vertical flex-center gap-y-10 -translate-y-10">
            <NuxtLink
              v-for="(item, idx) in navs"
              :key="idx"
              :to="item.path"
              class="text-xl border-b-2"
              :class="[isActiveRoute(item.path) ? 'text-green-600' : 'text-slate-800']"
              @click="showMobileNav = false"
            >{{ item.title }}</NuxtLink>
          </nav>
        </div>
      </Transition>
    </header>
    <main class="w-[1100px] max-lg:w-full overflow-x-hidden">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
</style>