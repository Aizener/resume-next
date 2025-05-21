<script setup lang="ts">
const data = ref('');

const setData = (_data: Resume) => {
  data.value = _data.other;
}

defineExpose({
  data,
  setData
});
</script>

<template>
  <MultiTitle
    title="其他"
    subtitle="请输入其他优势（性格，证书等）"
  />
  <div class="mt-4 pt-4 border-t border-neutral-300">
    <textarea
      v-model="data"
      maxlength="500"
      placeholder="这里可以输入补充内容..."
      class="w-full border border-neutral-300 p-2 rounded-md text-sm text-neutral-700 resize-none outline-none h-24"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>