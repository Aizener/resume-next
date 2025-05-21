<script setup lang="ts">
import { Api } from '~/shared/apis';

const emits = defineEmits<{
  (event: 'change', tempId: string): void
}>();

const open = ref(false);

const page = ref(1);
const pageSize = ref(6);
const total = ref(0);

const isInit = ref(false);

const data = ref<Template[]>();
const initData = async () => {
  isInit.value = false;
  const { data: _data, total: _total } = await useRequestGet<QueryData<Template[]>>(
    Api.Template.List(),
    {
      page: page.value,
      pageSize: pageSize.value
    }
  );
  isInit.value = true;

  data.value = _data;
  total.value = _total;
}

watch(() => open.value, (isOpen: boolean) => {
  if (isOpen && !data.value) {
    initData();
  }
}, { immediate: true });

const handleChangeTemplate = (item: Template) => {
  open.value = false;
  emits('change', item.id);
}
</script>

<template>
  <div>
    <UDrawer v-model:open="open" direction="right">
      <UButton
        icon="i-lucide-rocket"
        color="error"
        class="cursor-pointer"
      >选择模板</UButton>
  
      <template #content>
        <div class="min-w-100 h-dvh size-full flex-vertical relative m-4 overflow-y-auto max-lg:w-72">
          <LoadingBox v-if="!isInit" />
          <div v-else class="w-full h-full flex-vertical max-lg:w-72">
            <!-- <div class="border-b border-neutral-200 py-2 mb-2 flex justify-end">
              <UButton
                color="info"
                class="cursor-pointer"
                @click="handleChangeTemplate"
              >切换模板</UButton>
            </div> -->
            <div class="grid grid-cols-2 gap-3 overflow-y-auto flex-1 max-lg:w-full">
              <div
                v-for="(item, idx) in data"
                :key="idx" class="w-full h-52 border border-neutral-200 relative"
              >
                <TempCover :name="item.path" class="w-full h-full object-cover" />
                <div class="absolute w-full h-full left-0 top-0 flex-center transition-all opacity-0 hover:opacity-100 max-lg:opacity-100">
                  <div class="absolute w-full h-full bg-black opacity-70 max-lg:opacity-50" />
                  <UButton
                    color="primary"
                    size="xs"
                    class="z-10 cursor-pointer"
                    @click.stop="handleChangeTemplate(item)"
                  >使用</UButton>
                </div>
              </div>
            </div>
            <div class="flex border-t border-neutral-200 py-4 my-2">
              <UPagination
                v-model:page="page"
                :total="total"
                :items-per-page="pageSize"
              />
            </div>
          </div>
        </div>
      </template>
    </UDrawer>
  </div>
</template>

<style lang="scss" scoped>
</style>