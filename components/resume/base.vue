<script setup lang="ts">
const data = ref([
  { name: 'realname', title: '姓名', value: '' },
  { name: 'age', title: '年龄', value: '' },
  { name: 'address', title: '当前地址', value: '' },
  { name: 'mobile', title: '电话', value: '' },
  { name: 'email', title: '电子邮箱', value: '' },
  { name: 'status', title: '状态', value: '' },
  { name: 'industry', title: '行业', value: '' },
  { name: 'avatar', title: '头像', value: '' },
]);
const ages = ref(Array(59).fill(0).map((_, idx) => (idx + 12).toString()));
const getData = computed(() => {
  const result: Record<string, string> = {};
  for (const item of data.value) {
    if (item.name === 'mobile') {
      result[item.name] = item.value;
    } else {
      result[item.name] = item.value;
    }
  }

  return result;
});

const setData = (resumeData: Resume) => {
  for (const key in resumeData) {
    const typeKey = key as keyof typeof resumeData;
    for (const item of data.value) {
      if (item.name === typeKey) {
        if (item.name === 'mobile') {
          item.value = String(resumeData[typeKey]);
        } else {
          item.value = String(resumeData[typeKey] || '');
        }
      }
    }
  }
}

defineExpose({
  data: getData,
  setData
});
</script>

<template>
  <!-- <div class="flex items-center ml-4 my-6">
    <div class="w-2 h-8 bg-blue-500" />
    <h1 class="text-xl font-bold ml-2">请填写信息</h1>
  </div> -->
  <div class="flex flex-wrap gap-y-3">
    <div
      v-for="(item, idx) in data"
      :key="idx"
      class="w-1/2 flex"
    >
      <label class="text-sm text-neutral-700 font-bold text-right mr-0 w-18 translate-y-1.5 max-lg:shrink-0 max-lg:w-15 max-lg:text-xs max-lg:translate-y-2">{{ item.title }}：</label>
      <template v-if="item.name === 'age'">
        <div class="">
          <USelect v-model="item.value" :items="ages" :placeholder="`请输入${item.title}`" class="w-42 max-lg:w-full" />
        </div>
      </template>
      <template v-else-if="item.name === 'mobile'">
        <div class="flex-vertical">
          <UInput v-model="item.value" :placeholder="`请输入${item.title}`" class="w-45 max-lg:w-full">
            <template v-if="item.name === 'mobile'" #leading>
              <p class="text-sm text-muted">
                +86
              </p>
            </template>
          </UInput>
          <!-- <span class="text-right text-xs text-yellow-600 mt-1">*&nbsp;您的电话信息将被加密处理</span> -->
        </div>
      </template>
      <!-- <template v-else-if="item.name === 'avatar'">
        <img-upload />
      </template> -->
      <template v-else>
        <div class="flex-vertical">
          <UInput
            v-model="item.value"
            :placeholder="`请输入${item.title}`"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>