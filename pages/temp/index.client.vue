<script setup lang="ts">
import Base from '~/components/temps/base.client.vue';
import Normal from '~/components/temps/normal.client.vue';

const route = useRoute();
const websiteStore = useWebsiteStore();
const loadedToken = ref(false);
const compName = route.query.compName as string;

const comp = ref<Component>();

watch(() => loadedToken.value, (loaded: boolean) => {
  if (loaded || route.query.view) {
    const compDict: Record<string, Component> = {
      base: Base,
      normal: Normal
    }
    comp.value = compDict[compName];
  }
}, { immediate: true });

const timer = ref(), times = ref(0), maxTimes = ref(50);

const listenToken = () => {
  times.value ++;
  timer.value = setTimeout(() => {
    const token = window.TOKEN_FROM_PUPPETEER;
    if (token) {
      websiteStore.saveToken(token);
      loadedToken.value = true;
      clearTimeout(timer.value);
      timer.value = null;
    } else if (times.value <= maxTimes.value) {
      listenToken();
    }
  }, 200);
}

onMounted(() => {
  listenToken();
});
definePageMeta({
  layout: 'resume',
});
</script>

<template>
  <div class="w-[794px]">
    <component :is="comp" />
  </div>
</template>

<style lang="scss" scoped>
</style>