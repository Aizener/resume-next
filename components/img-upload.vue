<script setup lang="ts">
const img = ref('');
const uploader = ref<HTMLInputElement>();

const handleUpload = () => {
  if (img.value) {
    return;
  }
  if (!uploader.value) {
    uploader.value = document.querySelector('#img-uploader') as HTMLInputElement;
  }
  uploader.value.click();

  uploader.value.onchange = () => {
    const file = uploader.value?.files?.[0] as File;
    img.value = URL.createObjectURL(new Blob([file], { type: file.type }));
  }
};

const onRemoveImg = () => {
  img.value = '';
  uploader.value!.value = '';
}
</script>

<template>
  <div
    class="w-24 h-24 border border-neutral-300 rounded-md flex-center cursor-pointer hover:shadow-sm shadow-neutral-200"
    @click="handleUpload"
  >
    <div v-if="img" class="flex-center relative w-full h-full group">
      <img :src="img" alt="头像" class="select-none">
      <div
        class="absolute left-0 top-0 w-full h-full transition-all flex-center opacity-0 group-hover:opacity-100"
        @click.stop
      >
        <div class="w-full h-full bg-black absolute left-0 top-0 opacity-60 flex-center" />
        <i
          class="iconfont icon-shanchu text-white z-10"
          style="font-size: 24px;"
          @click="onRemoveImg"
        />
      </div>
    </div>
    <div v-else class="flex-center flex-col">
      <i
        class="iconfont icon-shangchuan text-neutral-400"
        style="font-size: 32px;"
      />
      <p class="text-neutral-500 text-xs">上传图片</p>
    </div>
  </div>
  <input id="img-uploader" type="file" accept="image/*" class="hidden" >
</template>

<style lang="scss" scoped>
</style>