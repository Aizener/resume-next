<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { Api } from '~/shared/apis';

const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

const loading = ref(false);

const data = ref<DownloadRecord[]>();
const columns = ref<TableColumn<DownloadRecord>[]>([
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `${row.index}`
  },
  {
    accessorKey: 'title',
    header: '简历标题',
  },
  {
    accessorKey: 'url',
    header: '文件key',
  },
  {
    accessorKey: 'createdTime',
    header: '创建时间',
  }
]);

const onPageChange = (_page: number) => {
  page.value = _page;
  initData();
};

const initData = async () => {
  loading.value = true;
  const { data: _data, total: _total } = await useRequestGet<QueryData<DownloadRecord[]>>(Api.Download.List(), {
    page: page.value,
    pageSize: pageSize.value
  });
  loading.value= false;
  data.value = _data;
  total.value = _total;
}

onMounted(() => {
  initData();
});
</script>

<template>
  <div class="w-full h-full flex-vertical">
    <div class="flex justify-end items-center border-b border-neutral-300 pb-2">
      <UButton
        class="cursor-pointer"
        color="info"
        :loading="loading"
        @click="initData"
      >刷新</UButton>
    </div>
    <div class="flex-1 overflow-y-auto">
      <UTable
        loading-color="primary"
        loading-animation="carousel"
        :loading="loading"
        :data="data"
        :columns="columns"
        class="flex-1 overflow-y-auto"
      >
        <template #title-cell="{ row }">
          {{ row.getValue('title') }}
        </template>
        <template #url-cell="{ row }">
          <div class="break-words max-w-32 whitespace-normal">
            {{ row.getValue('url') }}
          </div>
        </template>
        <template #createdTime-cell="{ row }">
          {{ formatDateToZHDate(row.getValue('createdTime')) }}
        </template>
        <template #updatedTime-cell="{ row }">
          {{ formatDateToZHDate(row.getValue('updatedTime')) }}
        </template>
      </UTable>
    </div>
    <div class="w-full h-12 justify-end flex items-end border-t border-neutral-200">
      <UPagination
        v-model:page="page"
        :total="total"
        @update:page="onPageChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>