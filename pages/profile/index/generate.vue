<script setup lang="ts">
import type { DropdownMenuItem, TableColumn } from '@nuxt/ui';
import { Api } from '~/shared/apis';
import { downloadFile } from '~/shared/utils/download';

const toast = useToast();

const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

const loading = ref(false);


const data = ref<GenerateDetail[]>();
const columns = ref<TableColumn<GenerateDetail>[]>([
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
    accessorKey: 'createdTime',
    header: '生成时间',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    id: 'action',
    header: '操作',
  }
]);

const menus = ref<DropdownMenuItem[]>([
  {
    label: '下载',
    icon: 'material-symbols:cloud-download',
    event: 'download'
  },
  // {
  //   label: '删除',
  //   icon: 'material-symbols:delete-forever-outline-sharp',
  //   event: 'remove'
  // }
]);

const onSelect = async (item: DropdownMenuItem, { original }: { original: GenerateDetail}) => {
  const { event } = item;
  if (event === 'download') {
    if (!original.url) {
      toast.add({
        title: '警告',
        color: 'error',
        description: '找不到存在的资源！'
      });
      return;
    }
    loading.value = true;
    const data = await useRequestGet<string>(Api.Qiniu.GetDownloadUrl(original.url));
    loading.value = false;
    if (data) {
      downloadFile(original.title, data);
      await useRequestPost(Api.Download.Save(), {
        title: original.title,
        url: original.url,
        generateRecordDetailId: original.id,
      });
    }
  }
}


const onPageChange = (_page: number) => {
  page.value = _page;
  initData();
};

const initData = async () => {
  loading.value = true;
  const { data: _data, total: _total } = await useRequestGet<QueryData<GenerateDetail[]>>(Api.Generate.List(), {
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
          {{ row.original.title }}
        </template>
        <template #status-cell="{ row }">
          <div class="text-center">
            <UBadge v-if="row.original.status === 'SUCCESS'" color="success">成功</UBadge>
            <UBadge v-if="row.original.status === 'FAIL'" color="error">失败</UBadge>
            <UBadge v-if="row.original.status === 'START'" color="info">进行中</UBadge>
          </div>
        </template>
        <template #createdTime-cell="{ row }">
          {{ formatDateToZHDate(row.getValue('createdTime')) }}
        </template>
        <template #updatedTime-cell="{ row }">
          {{ formatDateToZHDate(row.getValue('updatedTime')) }}
        </template>
        <template #action-cell="{ row }">
          <div class="w-10">
            <UDropdownMenu
              :items="menus"
              :content="{
                align: 'start',
                side: 'bottom',
                sideOffset: 8,
              }"
              :ui="{
                content: 'min-w-24'
              }"
            >
              <template #item="{ item }">
                <UModal
                  v-if="item.event === 'remove'"
                  v-model:open="item.open"
                  title="警告"
                  description="你确定要删除这条简历吗？"
                >
                  <UButton
                    size="sm"
                    class="w-full cursor-pointer"
                    variant="outline"
                    color="error"
                    :icon="item.icon"
                    :loading="loading"
                    @click.stop="onSelect(item, row)"
                  >{{ item.label }}</UButton>
                  <template #footer>
                    <div class="w-full flex justify-end gap-x-2">
                      <UButton
                        :loading="loading"
                        class="cursor-pointer"
                        color="neutral"
                        @click="item.open = false"
                      >取消</UButton>
                      <UButton
                        :loading="loading"
                        class="cursor-pointer"
                        color="info"
                      >确定</UButton>
                    </div>
                  </template>
                </UModal>
                <UButton
                  v-else
                  size="sm"
                  class="w-full cursor-pointer"
                  variant="outline"
                  color="info"
                  :icon="item.icon"
                  :loading="loading"
                  @click.stop="onSelect(item, row)"
                >{{ item.label }}</UButton>
              </template>
              <UButton
                icon="i-lucide-menu"
                color="primary"
              >操作</UButton>
            </UDropdownMenu>
          </div>
        </template>
      </UTable>
    </div>
    <div class="w-full h-12 justify-end flex items-end border-t border-neutral-200">
      <UPagination
        v-model:page="page"
        :total="total"
        :items-per-page="pageSize"
        @update:page="onPageChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>