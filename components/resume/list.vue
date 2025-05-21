<script setup lang="ts">
import { ResumeListEnum } from '~/shared/enums';

const props = defineProps<{
  type: ResumeListEnum
}>();

const titles = computed(() => {
  const obj = {
    title: '',
    formTitle: '',
    dateTitle: '',
    contentTitle: ''
  };
  if (props.type === ResumeListEnum.WORKS) {
    obj.title = '工作经历';
    obj.formTitle = '公司名称';
    obj.dateTitle = '就职时间';
    obj.contentTitle = '工作内容';
  } else if (props.type === ResumeListEnum.PROJECTS) {
    obj.title = '项目经历';
    obj.formTitle = '项目名称';
    obj.dateTitle = '项目时间';
    obj.contentTitle = '项目内容';
  }
  return obj;
});

const toast = useToast();

const workEditorRef = ref();

const onRemoveItem = (idx: number) => {
  data.value.splice(idx, 1);
};

const editIndex = ref(-1);
const temp = ref<ListRecord>({
  name: '',
  job: '',
  beginTime: '',
  endTime: '',
  content: '',
  contentHtml: '',
  order: 0
});
type Item = ListRecord & { showContent: boolean };
const data = ref<Item[]>([]);
const resetTemp = () => {
  for (const key in temp.value) {
    const typeKey = key as keyof typeof temp.value;
    if (typeKey === 'order') temp.value[typeKey] = 0;
    else
      temp.value[typeKey] = '';
  }
}
const openCreateWorkModal = ref(false);
watch(() => openCreateWorkModal.value, visible => {
  if (!visible) {
    resetTemp();
  }
});


const handleSave = () => {
  const content = workEditorRef.value.quill.getContents();
  const html = workEditorRef.value.quill.getSemanticHTML();
  temp.value.content = JSON.stringify(content.ops);
  temp.value.contentHtml = html;
  for (const key in temp.value) {
    const typeKey = key as keyof typeof temp.value;
    if (typeof temp.value[typeKey] === 'string' && temp.value[typeKey].trim() === '') {
      // toast.add({
      //   title: '警告',
      //   description: '请完成表单内容！',
      //   color: 'warning'
      // });
      // return;
    }
  }
  const value = {
    ...temp.value,
    content: temp.value.content,
    showContent: true,
  };
  if (editIndex.value > -1) {
    data.value[editIndex.value] = value;
  } else {
    value.order = data.value.length
    data.value.push(value);
  }
  resetTemp();
  openCreateWorkModal.value = false;
}

const onToggle = (item: Item) => {
  item.showContent = !item.showContent;
}

const handleChangeOrder = (idx: number) => {
  const lastItem = data.value[idx - 1];
  const currentItem = data.value[idx];
  const temp = JSON.parse(JSON.stringify(lastItem));
  data.value[idx - 1] = currentItem;
  data.value[idx] = temp;
  data.value.forEach((item, idx) => item.order = idx + 1);
}

const handleEditItem = (idx: number) => {
  editIndex.value = idx;
  temp.value = data.value[idx];
  openCreateWorkModal.value = true;
  requestAnimationFrame(() => {
    workEditorRef.value.quill.setContents(JSON.parse(temp.value.content));
  });
}

const setData = (_data: Resume) => {
  let list: string = '';
  if (props.type === ResumeListEnum.WORKS) {
    list = _data.works;
  } else if (props.type === ResumeListEnum.PROJECTS) {
    list = _data.projects;
  }

  data.value = list ? JSON.parse(list) : [];
}

defineExpose({
  data,
  setData
});
</script>

<template>
  <MultiTitle :title="titles.title" :subtitle="`请输入${titles.title}`">
    <UModal
      v-model:open="openCreateWorkModal"
      :title="`创建${titles.title}`"
      :description="`请在下面填写您的${titles.title}信息`"
    >
      <UButton
        icon="i-lucide-rocket"
        size="md"
        color="primary"
        variant="solid"
        class="cursor-pointer"
        @click="editIndex = -1"
      >创建{{ titles.title }}</UButton>
      <template #body>
        <div class="flex items-center gap-x-2">
          <div class="flex-1">
            <h2 class="text-md font-bold text-neutral-600">请输入{{ titles.formTitle }}</h2>
            <UInput
              v-model="temp.name"
              :placeholder="`请输入${titles.formTitle}`"
              class="mt-1 w-50 max-lg:w-full"
            />
          </div>
          <div class="flex-1">
            <h2 class="text-md font-bold text-neutral-600">请输入任职岗位</h2>
            <UInput
              v-model="temp.job"
              placeholder="请输入任职岗位"
              class="mt-1 w-50 max-lg:w-full"
            />
          </div>
        </div>
        <div class="mt-4">
          <h2 class="text-md font-bold text-neutral-600">请输入{{ titles.dateTitle}}</h2>
          <div class="flex items-center gap-6 mt-1">
            <UInput v-model="temp.beginTime" placeholder="请输入开始时间" />
            <span>-</span>
            <UInput v-model="temp.endTime" placeholder="请输入结束时间" />
          </div>
        </div>
        <div class="mt-4">
          <h2 class="text-md font-bold text-neutral-600">请输入{{ titles.contentTitle }}</h2>
          <RichEditor id="work-editor" ref="workEditorRef" />
        </div>
        <div class="mt-2 flex justify-end gap-2">
          <UButton class="cursor-pointer" @click="handleSave">保存</UButton>
        </div>
      </template>
    </UModal>
  </MultiTitle>
  <div class="w-full flex-vertical overflow-hidden border-t border-neutral-300 py-4 text-center mt-4">
    <div
      v-for="(item, idx) in data"
      :key="idx"
      class="w-full shadow-md shadow-neutral-200 border-t border-neutral-100 p-4 mt-4"
      :style="{ order: item.order || 1 }"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">{{ item.name }}</h1>
        <p class="text-neutral-800 font-bold">{{ item.job }}</p>
      </div>
      <div class="text-right font-bold">{{ item.beginTime }} ~ {{ item.endTime }}</div>
      <Transition name="toggle">
        <div
          v-show="item.showContent"
          v-dompurify-html="item.contentHtml"
          class="border-t border-neutral-200 py-2 text-left break-words transition-all"
        />
      </Transition>
      <div class="border-t border-neutral-200 flex justify-end gap-x-2 py-2">
        <AlertModal
          title="提示"
          content="你确定要删除这条记录吗？"
          @confirm="onRemoveItem(idx)"
        >
          <UButton
            color="error"
            size="xs"
            class="cursor-pointer"
          >删除</UButton>
        </AlertModal>
        <UButton size="xs" color="primary" class="cursor-pointer" @click="onToggle(item)">
          {{ item.showContent ? '收起' : '展开' }}
        </UButton>
        <UButton
          color="info"
          size="xs"
          class="cursor-pointer"
          @click="handleEditItem(idx)"
        >编辑</UButton>
        <UButton
          v-if="data.length > 1 && idx > 0"
          icon="i-lucide-arrow-up"
          variant="outline"
          class="cursor-pointer"
          @click="handleChangeOrder(idx)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toggle-enter-from, .toggle-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}

.toggle-enter-active, .toggle-leave-active {
  transition: all .3s;
}
</style>