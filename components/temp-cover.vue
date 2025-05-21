<script setup lang="ts">
const props = defineProps<{
  name: string
}>();

const getFileName = (path: string) => {
  const str = path.split('/').slice(-1)[0];
  const name = str.split('.')[0];
  return name;
}

const imgs = ref<Record<string, string>>({});
onMounted(async () => {
  const tempImgs = import.meta.glob('/public/temp/*', {
    eager: true,
    import: 'default'
  });
  for (const path in tempImgs) {
    const name = getFileName(path);
    imgs.value[name] = tempImgs[path] as string;
  }
});


const compPath = computed(() => imgs.value[props.name]);
</script>

<template>
  <img :src="compPath" :alt="compPath" class="object-cover object-left-top">
</template>

<style lang="scss" scoped>
</style>