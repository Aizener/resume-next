<script setup lang="ts">
import type { DropdownMenuItem, TableColumn } from '@nuxt/ui';
import { Api } from '~/shared/apis';

const router = useRouter();
const toast = useToast();

const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

const loading = ref(false);

const data = ref<Resume[]>();
const columns = ref<TableColumn<Resume>[]>([
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
    header: '创建时间',
  },
  {
    accessorKey: 'updatedTime',
    header: '最后修改时间',
  },
  {
    id: 'action',
    header: '操作',
  }
]);

const menus = ref<DropdownMenuItem[]>([
  {
    label: '编辑',
    icon: 'material-symbols:box-edit-outline-sharp',
    event: 'edit'
  },
  {
    label: '删除',
    icon: 'material-symbols:delete-forever-outline-sharp',
    event: 'remove'
  }
]);

const onSelect = (item: DropdownMenuItem, { original }: { original: Resume}) => {
  const { event } = item;
  if (event === 'edit') {
    handleEditItem(original);
  }
}

const onRemoveResume = async (item: DropdownMenuItem, id: string) => {
  loading.value = true;
  const res = await useRequestDelete(Api.Resume.Delete(id));
  loading.value = false;
  if (res) {
    item.open = false;
    toast.add({
      title: '成功',
      description: '简历记录已经成功被删除！'
    });
    initData();
  }
}

const handleEditItem = async (row: Resume) => {
  loading.value = true;
  router.push({
    path: '/resume/form',
    query: {
      id: row.id
    }
  });
}

const onPageChange = (_page: number) => {
  page.value = _page;
  initData();
};

const initData = async () => {
  loading.value = true;
  const { data: _data, total: _total } = await useRequestGet<QueryData<Resume[]>>(Api.Resume.List(), {
    page: page.value,
    pageSize: pageSize.value
  });
  total.value = _total;
  loading.value= false;
  data.value = _data;
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
                        @click="onRemoveResume(item, row.original.id)"
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
        @update:page="onPageChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>