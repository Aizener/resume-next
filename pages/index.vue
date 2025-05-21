<script setup lang="ts">
import { Api } from '~/shared/apis';

const router = useRouter();
const websiteStore = useWebsiteStore();

const recommendList = ref<Template[]>();
const newList = ref<Template[]>();

const toast = useToast();

const handleToCreatePage = () => {
  if (websiteStore.token) {
    router.push('/resume/create');
  } else {
    toast.add({ title: '提示', description: '请先登入！', color: 'warning' });
    router.push('/logreg');
  }
}

const initRecommendData = async () => {
  const data = await useRequestData<Template[]>('recommendData', {
    api: Api.Template.Recommend(),
    params: {
      page: 1,
      pageSize: 4
    }
  });
  recommendList.value = data;
}

const initNewData = async () => {
  const data = await useRequestData<Template[]>('newData', {
    api: Api.Template.New(),
    params: {
      page: 1,
      pageSize: 4
    }
  });
  newList.value = data;
}

const initData = () => {
  initNewData();
  initRecommendData();
}

initData();
</script>

<template>
  <div class="flex flex-col items-center pt-12 pb-6 max-lg:p-0 max-lg:mt-2">
    <div class="flex gap-12 bg-slate-50 border-t border-neutral-100 p-12 shadow-md rounded-md max-lg:p-4 max-lg:flex-vertical max-lg:gap-6">
      <div class="flex-1 max-lg:order-2">
        <h2 class="text-5xl max-lg:text-4xl">即刻</h2>
        <p class="mt-2 text-neutral-600">一个轻便、简洁的简历生成工具！</p>
        <h3 class="text-xl mt-4 font-bold text-neutral-600">填写您的个人信息，展示你的优势与特长，生成一份属于你的简历吧，现在开始吗？</h3>
        <UButton trailing-icon="i-lucide-arrow-right" size="xl" class="cursor-pointer my-9" @click="handleToCreatePage">即刻开始</UButton>
        <p class="text-sm">只需要选择一份简历模板，填写您的信息，就会得到一份你喜欢的简历。</p>
        <p class="text-sm">即刻简历感谢每一位用户的信任与支持，即刻上传即刻生成！</p>
        <div class="flex flex-col gap-y-0.5 mt-6">
          <h2 class="text-sm font-bold">网站助手：</h2>
          <span class="text-sm">1.点击“即刻创建”进入创建页面；</span>
          <span class="text-sm">2.输入简历标题后，即刻进行表单编写和生成。</span>
        </div>
        <p class="mt-6 text-sm text-slate-600">备案号：蜀ICP备2025133833号</p>
      </div>
      <div class="flex-1 max-lg:order-1">
        <img src="/public/cover.png">
      </div>
    </div>

    <div class="inline-flex p-6 gap-6 shadow-md shadow-neutral-200 rounded-md bg-white border border-neutral-200 -translate-y-1/5 max-lg:w-full max-lg:flex-wrap">
      <div class="flex-1 w-32 h-24 flex-center flex-col bg-green-500 rounded-md text-white text-xl max-lg:basis-32">
        <p>云端保存</p>
        <span class="text-xs">电脑、手机数据共享</span>
      </div>
      <div class="flex-1 w-32 h-24 flex-center flex-col bg-sky-500 rounded-md text-white text-xl max-lg:basis-32">
        <p>免费生成</p>
        <span class="text-xs">无需付费，即刻生成</span>
      </div>
      <div class="flex-1 w-32 h-24 flex-center flex-col bg-red-400 rounded-md text-white text-xl max-lg:basis-32">
        <p>AI辅助</p>
        <span class="text-xs">AI辅助生成内容</span>
      </div>
      <div class="flex-1 w-32 h-24 flex-center flex-col bg-yellow-400 rounded-md text-white text-xl max-lg:basis-32">
        <p>简洁轻便</p>
        <span class="text-xs">使用简单不复杂</span>
      </div>
    </div>

    <TempList v-if="newList" title="最新模板" :data="newList" class="mt-12 max-lg:mt-6" />
    <TempList v-if="recommendList" title="热门模板" :data="recommendList" class="mt-12 max-lg:mt-6" />

    <div class="mt-12">本站由<NuxtLink to="http://iamcola.cc" target="_blank" class="mx-1 text-green-500 underline pb-6">iamcola.cc</NuxtLink>提供支持</div>
  </div>
</template>

<style lang="scss" scoped>
</style>