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
  const fields = ['realname', 'age', 'mobile', 'address', 'industry', 'email', 'status', 'other'];

  for (const key of fields) {
    const typeKey = key as keyof Omit<typeof data, 'education' | 'works' | 'projects'>;
    if (data[typeKey]) {
      if (typeKey === 'template') continue;
      renderData.value[typeKey] = data[typeKey];
    }
  }

  const advantageContent = data['advantageHtml'];
  if (advantageContent && advantageContent !== '<p></p>') {
    renderData.value.advantageHtml = advantageContent;
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
  <div id="normal" class="resume-template-page w-full bg-white border border-neutral-200 relative">
    <div v-if="isLoaded" id="loaded-core" class="hidden opacity-0 -z-10" />
    <div class="w-full border-b border-neutral-300 relative z-10">
      <div class="mt-2 flex justify-center items-center w-80 h-16 bg-sky-600 text-white rounded-tr-4xl">
        <h1 class="text-2xl mr-4 pr-4 font-bold border-r-2 border-neutral-50">个人简介</h1>
        <div>
          <p class="text-sm font-bold">PERSONAL RESUME</p>
          <p class="text-sm font-bold">认真踏实的做好每件事</p>
        </div>
      </div>
    </div>

    <div class="absolute w-0.5 h-full bg-neutral-200 left-14 top-0" />

    <div class="px-6 pb-2 relative z-10">
      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">基本信息</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>

      <div class="px-4 pl-12">
        <div class="flex">
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">姓名</div>
              <span>：</span>
            </div>
            <p>{{ renderData.realname }}</p>
          </div>
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">年龄</div>
              <span>：</span>
            </div>
            <p>{{ renderData.age }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">求职岗位</div>
              <span>：</span>
            </div>
            <p>{{ renderData.industry }}</p>
          </div>
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">意向城市</div>
              <span>：</span>
            </div>
            <p>{{ renderData.address }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">联系电话</div>
              <span>：</span>
            </div>
            <p>{{ renderData.mobile }}</p>
          </div>
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">电子邮箱</div>
              <span>：</span>
            </div>
            <p>{{ renderData.email }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 h-8">
            <div class="w-24 flex mr-4">
              <div class="flex-1 text-justify after:content-[''] after:inline-block after:w-full">状态</div>
              <span>：</span>
            </div>
            <p>{{ renderData.status }}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">教育信息</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>

      <div class="px-4 pl-12">
        <div class="flex justify-between">
          <div>
            就读时间：
            {{ renderData.education.beginTime }}~{{ renderData.education.endTime }}
          </div>
          <div>{{ renderData.education.school }}</div>
        </div>
        <div class="flex justify-end">{{ renderData.education.major }}</div>
      </div>
      
      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">个人优势</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>

      <div v-dompurify-html="renderData.advantageHtml" class="py-2 pl-12 text-[15px]" />

      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">工作经验</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>

      <div class="px-4 pl-12">
        <div
          v-for="(item, idx) in renderData.works"
          :key="idx"
          class="border border-neutral-200 p-3 rounded-md my-4"
        >
          <div>
            <div class="flex justify-between">
              <div>
                任职时间：
                {{ item.beginTime }}~{{ item.endTime }}
              </div>
              <div>{{ item.name }}</div>
            </div>
            <div class="flex justify-end">{{ item.job }}</div>
          </div>
          <div v-dompurify-html="item.contentHtml" class="p-4 text-[15px] border-t mt-2 border-neutral-200" />
        </div>
      </div>

      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">项目经验</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>

      <div class="px-4 pl-12">
        <div
          v-for="(item, idx) in renderData.projects"
          :key="idx"
          class="border border-neutral-200 p-3 rounded-md my-4"
        >
          <div>
            <div class="flex justify-between">
              <div>
                项目时间：
                {{ item.beginTime }}~{{ item.endTime }}
              </div>
              <div>{{ item.name }}</div>
            </div>
            <div class="flex justify-end">{{ item.job }}</div>
          </div>
          <div v-dompurify-html="item.contentHtml" class="p-4 text-[15px] border-t mt-2 border-neutral-200" />
        </div>
      </div>

      <div class="flex items-center my-6">
        <h2 class="font-bold bg-sky-600 rounded-3xl px-4 py-1 text-white">其他</h2>
        <div class="flex-1 h-0.5 bg-neutral-200" />
      </div>
      <div class="p-4 text-[15px] break-words w-full pr-4 pl-12" >
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