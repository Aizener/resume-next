<script setup lang="ts">
import { Api } from '~/shared/apis';

const deviceType = useState('deviceType');
const route = useRoute();
const router = useRouter();

const title = ref('');
const activeTemplateIndex = ref(0);
const toast = useToast();
const loading = ref(false);

const recommendList = ref<Template[]>([]);

const handleStart = async () => {
  if (loading.value) return;

  if (title.value.trim() === '') {
    toast.add({
      title: '警告',
      description: '请输入简历名称！',
      color: "warning"
    });
    return;
  }
  const template = recommendList.value[activeTemplateIndex.value];
  loading.value = true;
  const res = await useRequestPost<Resume>(Api.Resume.Create(), {
    title: title.value,
    templateId: template.id
  });
  loading.value = false;
  
  if (res) {
    toast.add({
      color: 'success',
      title: '成功',
      description: '简历创建成功，即将跳转！',
    });
    router.push({
      path: '/resume/form',
      query: {
        id: res.id,
      }
    });
  }
}

const initRecommendData = async () => {
  const data = await useRequestData<Template[]>('recommendData', {
    api: Api.Template.Recommend()
  });
  if (!data) return;
  recommendList.value = data;
}

const initData = async () => {
  initRecommendData();
}

if (route.query.id) {
  const id = route.query.id as string;
  const path = route.query.path as string;
  recommendList.value = [
    { id, path, type: '', usedTimes: '', title: '' },
  ];
} else {
  initData();
}
</script>

<template>
  <div class="flex-vertical items-center py-6 mt-16 border-t border-neutral-200 rounded-md shadow-md shadow-neutral-300 bg-white max-lg:py-3 max-lg:mt-6 max-lg:px-2 max-lg:w-full">
    <h1 class="font-bold mt-12 text-center">
      <p class="text-3xl text-neutral-600">即刻创建！</p>
      <p class="text-xl text-neutral-600">请在下面输入框填写您的简历名称...</p>
    </h1>

    <div class="mt-8 flex">
      <UInput
        v-model="title"
        placeholder="请输入简历名称"
        class="w-64 *:rounded-none max-lg:w-full"
        @keydown.enter="handleStart"
      />
      <UButton
        trailing-icon="i-lucide-arrow-right"
        class="cursor-pointer rounded-none w-32 flex justify-center max-lg:shrink-0 max-lg:text-xs max-lg:w-26"
        :loading="loading"
        @click.stop="handleStart"
      >即刻开始</UButton>
    </div>

    <div class="px-32 py-12 max-lg:px-2">
      <div v-if="recommendList.length === 0" class="flex gap-x-2">
        <USkeleton class="w-52 h-72" />
        <USkeleton class="w-52 h-72" />
        <USkeleton class="w-52 h-72" />
      </div>
      <UCarousel
        v-else
        v-slot="{ index, item }"
        loop
        arrows
        :autoplay="false"
        :items="recommendList"
        :ui="{
          item: deviceType ==='mobile' ? 'basis-1/1' : `basis-1/${Math.min(3, recommendList.length)}`
        }"
      >
        <!-- <div
          v-if="index === 0"
          class="w-full h-80 border bg-neutral-100 flex-center"
          :class="[activeTemplateIndex === index ? 'border-blue-500' : 'border-neutral-200']"
          @click="activeTemplateIndex = index"
        >
          <p class="text-xl font-bold text-neutral-800">暂不使用模板</p>
        </div> -->
        <div class="px-0.5">
          <div
            class="flex-1 h-80 border shadow-md shadow-neutral-100"
            :class="[activeTemplateIndex === index ? 'border-blue-500' : 'border-neutral-200']"
            @click="activeTemplateIndex = index"
          >
            <TempCover :name="item.path" class="w-full h-full" />
          </div>
        </div>
      </UCarousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>