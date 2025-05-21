<script setup lang="ts">
const education = ref({
  school: '',
  major: '',
  beginTime: '',
  endTime: ''
});

const setData = (_data: Resume) => {
  education.value = _data.education ? JSON.parse(_data.education) : {
    school: '',
    major: '',
    beginTime: '',
    endTime: ''
  };
}

defineExpose({
  data: education,
  setData
});
</script>

<template>
  <MultiTitle title="学历信息" subtitle="请输入学历信息" />
  <div class="border-t border-neutral-300 mt-4 pt-4 flex flex-wrap justify-between">
    <div class="text-sm">
      <span class="max-lg:leading-8">毕业院校：</span>
      <UInput
        v-model="education.school"
        placeholder="请输入毕业院校"
        class="max-lg:w-full"
      />
    </div>
    <div class="text-sm">
      <span class="max-lg:leading-8">请输入专业：</span>
      <UInput
        v-model="education.major"
        placeholder="请输入专业"
        class="max-lg:w-full"
      />
    </div>
    <div class="text-sm mt-4">
      <span class="max-lg:leading-8">就读时间：</span>
      <UInput
        v-model="education.beginTime"
        placeholder="请输入入学时间"
        class="max-lg:w-full"
      />
       ~ 
      <UInput
        v-model="education.endTime"
        placeholder="请输入毕业时间"
        class="max-lg:w-full"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>