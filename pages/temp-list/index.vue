<script setup lang="ts">
import { Api } from '~/shared/apis';

const page = ref(1);
const pageSize = ref(8);
const total = ref(0);

const search = ref('');
const activeType = ref('');

const isRequset = ref(false);

const types = ref<TemplateType[]>([{ type: '' }]);
const templateList = ref<Template[]>([]);

const initTypes = async () => {
  const data = await useRequestData<TemplateType[]>(
    'TemplateType',
    { api: Api.Template.Types() }
  );
  if (!data) return;
  types.value.push(...data);
}

const initList = async () => {
  const res = await useRequestData<QueryData<Template[]>>('TemplateList', {
    api: Api.Template.List(),
    params: {
      page: page.value,
      pageSize: pageSize.value,
      title: search.value,
      type: activeType.value
    }
  });
  if (!res) return;
  total.value = res.total;
  templateList.value = res.data;
}

const initData = async () => {
  await initTypes();
  await initList();
  isRequset.value = true;
}
initData();


const changeType = (type: string) => {
  activeType.value = type;
  initList();
}
</script>

<template>
  <div class="mt-2 py-2 flex-vertical max-lg:w-full">
    <div class="flex justify-between items-end border-b border-neutral-200 mt-4 pb-4 max-lg:flex-vertical max-lg:justify-start">
      <div class="flex-vertical max-lg:px-2 max-lg:w-full">
        <h1 class="font-bold mr-2">模板类型：</h1>
        <div v-if="isRequset" class="flex flex-wrap items-center mt-2 gap-6">
          <span
            v-for="(item, idx) in types"
            :key="idx"
            class="text-sm cursor-pointer hover:text-green-600"
            :class="[activeType === item.type ? 'text-green-600' : 'text-neutral-800']"
            @click="changeType(item.type)"
          >{{ item.type || '全部' }}</span>
        </div>
        <div v-else class="flex gap-x-4">
          <USkeleton class="w-16 h-4 mt-2" />
          <USkeleton class="w-16 h-4 mt-2" />
          <USkeleton class="w-16 h-4 mt-2" />
          <USkeleton class="w-16 h-4 mt-2" />
        </div>
      </div>
      <div class="shrink-0 ml-16 max-lg:ml-0 max-lg:mt-4 max-lg:mr-2">
        <UInput v-model="search" placeholder="请输入模板名称" />
        <UButton class="ml-2" @click="initList">搜索</UButton>
      </div>
    </div>
    <template v-if="isRequset">
      <div class="flex flex-wrap items-start gap-4 mt-4 flex-1 max-lg:justify-center">
        <div
          v-for="(item, idx) in templateList"
          :key="idx"
          class="w-1/4 border border-neutral-200 hover:border-green-600 relative group max-lg:w-[calc(50%-12px)]"
        >
          <div class="absolute w-full h-full left-0 top-0 flex-center opacity-0 transition-all group-hover:opacity-100">
            <div class="absolute w-full h-full bg-black opacity-50" />
            <UButton class="absolute z-20 cursor-pointer">使用</UButton>
          </div>
          <TempCover :name="item.path" class="w-full h-64 max-lg:h-52" />
          <div class="flex-vertical border-t border-neutral-200 p-2">
            <h2 class="font-bold">{{ item.title }}</h2>
            <div class="flex justify-between mt-1">
              <span class="text-sm">类型：{{ item.type }}</span>
              <span class="text-sm">使用次数：{{ item.usedTimes }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end border-t border-neutral-200 py-4 mt-4">
        <UPagination
          v-model:page="page"
          :total="total"
          :items-per-page="pageSize"
        />
      </div>
    </template>
    <div v-else class="flex gap-4 mt-4 flex-1">
      <USkeleton class="w-1/4 h-72 mt-2" />
      <USkeleton class="w-1/4 h-72 mt-2" />
      <USkeleton class="w-1/4 h-72 mt-2" />
      <USkeleton class="w-1/4 h-72 mt-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>