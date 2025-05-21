<script setup lang="ts">
import { Api } from '~/shared/apis';

type Item = { name: string, job: string, content: string, contentHtml: string, beginTime: string, endTime: string };
type Education = { school: string, major: string, beginTime: string, endTime: string };
type RenderResume = Partial<Omit<Resume, 'education' | 'works' | 'projects'>> & {
  education: Education,
  works: Item[],
  projects: Item[],
}
const props = defineProps<{
  data: Resume | undefined
}>();

const route = useRoute();
const isLoaded = ref(false);

const renderData = ref<RenderResume>({
  address: '地址占位',
  age: '18',
  education: {
    school: '学校占位',
    major: '专业占位',
    beginTime: '2025/04/28',
    endTime: '2025/04/28',
  },
  email: '邮箱占位',
  industry: '行业占位',
  mobile: '13666668888',
  advantageHtml: '<p>个人优势占位</p>',
  projects: [{
    name: '项目占位',
    job: '职责占位',
    beginTime: '2025/04/28',
    endTime: '2025/04/28',
    content: '',
    contentHtml: '项目占位'
  }],
  realname: '姓名占位',
  status: '状态占位',
  works: [{
    name: '工作占位',
    job: '职责占位',
    beginTime: '2025/04/28',
    endTime: '2025/04/28',
    content: '',
    contentHtml: '工作占位'
  }],
  other: '其他占位',
});

const setData = (data: Resume) => {
  const fields = ['realname', 'age', 'mobile', 'address', 'industry', 'email', 'status', 'other', 'advantageHtml'];

  for (const key of fields) {
    const typeKey = key as keyof Omit<typeof data, 'education' | 'works' | 'projects'>;
    if (data[typeKey]) {
      if (typeKey === 'template') continue;
      renderData.value[typeKey] = data[typeKey];
    }
  }

  const advantageContent = data['advantageHtml'];
  if (advantageContent && advantageContent !== '<p></p>') {
    renderData.value.advantage = advantageContent;
  }

  const works = (typeof data.works === 'string' && data.works) ? data.works : '';
  const projects = (typeof data.projects === 'string' && data.projects) ? data.projects : '';
  const education = (typeof data.education === 'string' && data.education) ? data.education : '';
  if (education) {
    renderData.value.education = JSON.parse(education);
  }
  if (works) {
    renderData.value.works = JSON.parse(works);
  }
  if (projects) {
    renderData.value.projects = JSON.parse(projects);
  }
}

watch(() => props.data, (data: Resume | undefined) => {
  if (!data) return;
  setData(data);
}, { immediate: true });

onMounted(async () => {
  const id = route.query.id as string;
  if (!id) return;
  const data = await useRequestGet<Resume>(Api.Resume.Get(), { id });
  setData(data);
  await nextTick();
  isLoaded.value = true;
});
</script>

<template>
  <div v-if="renderData" id="base" class="resume-template-page w-full bg-white border border-neutral-200">
    <div v-if="isLoaded" id="loaded-core" class="hidden opacity-0 -z-10" />
    <div class="bg-cyan-800">
      <h1 class="text-neutral-100 text-2xl font-bold pl-6 pt-4">基本信息</h1>
      <div class="w-full flex justify-center overflow-hidden">
        <div class="pt-4 w-2xl flex flex-col gap-y-2 grow-0 pl-12 pr-6">
          <div class="flex">
            <div class="text-white text-md flex-1 flex overflow-hidden mr-8">
              <span class="w-26">
                <i class="iconfont icon-xingming mr-1" />
                <span>姓名</span>
              </span>
              <span id="realname" class="flex-1 break-words overflow-hidden">{{ renderData.realname }}</span>
            </div>
            <div class="text-white text-md flex-1 flex overflow-hidden">
              <span class="w-26">
                <i class="iconfont icon-nianling mr-1" />
                <span>年龄</span>
              </span>
              <span id="age" class="break-words overflow-hidden">{{ renderData.age }}</span>
            </div>
          </div>
          <div class="flex">
            <div class="text-white text-md flex-1 flex overflow-hidden mr-8">
              <span class="w-26">
                <i class="iconfont icon-shoujihaoma mr-1" />
                <span>联系方式</span>
              </span>
              <span id="mobile" class="flex-1 break-words overflow-hidden">{{ renderData.mobile }}</span>
            </div>
            <div class="text-white text-md flex-1 flex overflow-hidden">
              <span class="w-26">
                <i class="iconfont icon-chengshi mr-1" />
                <span>所在城市</span>
              </span>
              <span id="address" class="flex-1 break-words overflow-hidden">{{ renderData.address }}</span>
            </div>
          </div>
          <div class="flex">
            <div class="text-white text-md flex-1 flex overflow-hidden mr-8">
              <span class="w-26 shrink-0">
                <i class="iconfont icon-youxiang mr-1" />
                <span>电子邮箱</span>
              </span>
              <span id="email" class="flex-1 break-words overflow-hidden">{{ renderData.email }}</span>
            </div>
            <div class="text-white text-md flex-1 flex overflow-hidden">
              <span class="w-26">
                <i class="iconfont icon-gongzuojingyan mr-1" />
                <span>求职方向</span>
              </span>
              <span id="industry" class="flex-1 break-words overflow-hidden">{{ renderData.industry }}</span>
            </div>
          </div>
        </div>
        <div class="w-36 h-36 pr-6 shrink-0 -translate-y-5">
          <img class="w-full h-full object-cover" src="https://img.bosszhipin.com/beijin/upload/avatar/20250519/607f1f3d68754fd0b85ef84dcabf8e250a8a0827f5899cbfae478aafec1335ffd274832bd5ba0f86_s.png.webp" >
        </div>
      </div>
    </div>

    <div class="mx-6 py-6 border-l-6 border-cyan-800">
      <div class="border-b-2 border-cyan-800 flex items-end">
        <h2 class="bg-cyan-800 inline-flex items-center gap-x-2 text-sm text-white pl-2 pr-4 py-1 rounded-tr-2xl">
          <i class="iconfont icon-youshi1" />
          <span>教育背景</span>
        </h2>
      </div>
      <div id="education" class="w-full">
        <div class="p-4">
          <div class="flex justify-between">
            <p class="font-bold">毕业院校：{{ renderData.education.school }}</p>
            <p class="font-bold">专业：{{ renderData.education.major }}</p>
          </div>
          <p class="text-right font-bold">就读时间：{{ renderData.education.beginTime }} ~ {{ renderData.education.endTime }}</p>
        </div>
      </div>

      <div class="border-b-2 border-cyan-800 flex items-end">
        <h2 class="bg-cyan-800 inline-flex items-center gap-x-2  text-sm text-white pl-2 pr-4 py-1 rounded-tr-2xl">
          <i class="iconfont icon-youshi" />
          <span>个人优势</span>
        </h2>
      </div>
      <div v-dompurify-html="renderData.advantageHtml" class="p-4 text-[15px]" />

      <div class="border-b-2 border-cyan-800 flex items-end">
        <h2 class="bg-cyan-800 inline-flex items-center gap-x-2  text-sm text-white pl-2 pr-4 py-1 rounded-tr-2xl">
          <i class="iconfont icon-gongzuojingyan" />
          <span>工作经历</span>
        </h2>
      </div>
      <div id="works" class="p-4">
        <div
          v-for="(item, idx) in renderData.works"
          :key="idx"
          class="border border-neutral-200 rounded-md p-4 mb-4"
        >
          <div class="pb-4 border-b border-neutral-200">
            <div class="flex justify-between">
              <p class="font-bold">{{ item.name }}</p>
              <p class="font-bold">职位：{{ item.job }}</p>
            </div>
            <p class="text-right font-bold">就职时间：{{ item.beginTime }} ~ {{ item.endTime }}</p>
          </div>
          <div v-dompurify-html="item.contentHtml" class="pt-4 text-[15px]" />
        </div>
      </div>

      <div class="border-b-2 border-cyan-800 flex items-end">
        <h2 class="bg-cyan-800 inline-flex items-center gap-x-2  text-sm text-white pl-2 pr-4 py-1 rounded-tr-2xl">
          <i class="iconfont icon-xiangmu" />
          <span>项目经历</span>
        </h2>
      </div>
      <div id="projects" class="p-4">
        <div
          v-for="(item, idx) in renderData.projects"
          :key="idx"
          class="border border-neutral-200 rounded-md p-4 mb-4"
        >
          <div class="pb-4 border-b border-neutral-200">
            <div class="flex justify-between">
              <p class="font-bold">{{ item.name }}</p>
              <p class="font-bold">职位：{{ item.job }}</p>
            </div>
            <p class="text-right font-bold">项目时间：{{ item.beginTime }} ~ {{ item.endTime }}</p>
          </div>
          <div v-dompurify-html="item.contentHtml" class="pt-4 text-[15px]" />
        </div>
      </div>

      <div class="border-b-2 border-cyan-800 flex items-end">
        <h2 class="bg-cyan-800 inline-flex items-center gap-x-2  text-sm text-white pl-2 pr-4 py-1 rounded-tr-2xl">
          <i class="iconfont icon-gongzuohuanjing" />
          <span>其他</span>
        </h2>
      </div>
      <div class="p-4 text-[15px] break-words w-full pr-4" >
        {{ renderData.other }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.resume-template-page {
  ol {
    list-style: none;
    counter-reset: my-counter;
    li {
      counter-increment: my-counter;
      position: relative;
      padding-left: 20px;
      &::before {
        content: counter(my-counter) '. ';
        position: absolute;
        left: 0;
        top: 0; /* 可根据需要调整 */
      }
    }
  }
}
</style>