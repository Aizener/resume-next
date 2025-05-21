<script setup lang="ts">
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

const props = defineProps<{
  id: string;
}>();

const quill = ref();
const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
];

onMounted(async () => {
  await nextTick();
  quill.value = markRaw(new Quill(`#${props.id}`, {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  }));
});

defineExpose({
  quill
});
</script>

<template>
  <div class="mt-4 rounded-sm h-60 pb-12">
    <div :id="props.id" :key="props.id" />
  </div>
</template>

<style lang="scss" scoped>
</style>