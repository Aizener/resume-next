<script setup lang="ts">
import { TempsBase, UButton, TempsNormal } from '#components';
import html2canvas from 'html2canvas-pro';
import { Api } from '~/shared/apis';
import { ResumeListEnum } from '~/shared/enums';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const deviceType = useState('deviceType');

const submitLoading = ref(false);
const originData = ref<Resume>();

const baseRef = ref();
const worksRef = ref();
const projectsRef = ref();
const educationRef = ref();
const advantageEditor = ref();
const otherRef = ref();
const requestLoading = ref(false);
const renderRunning = ref(false);
const isShowPreview = ref(false);

const openAiModal = ref(false);
const aiContent = ref('');
const aiGenerateContent = ref('');
watch(() => isShowPreview.value, (isShow: boolean) => {
  if (isShow) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
const getRenderTemplate = computed(() => {
  const templates = {
    base: TempsBase,
    normal: TempsNormal
  };

  const key = originData.value?.template.path as keyof typeof templates;
  return templates[key];
});

const handlePreview = async () => {
  isShowPreview.value = true
}

const handleSave = async () => {
  if (submitLoading.value) return;

  renderRunning.value = true;

  const baseData = baseRef.value?.data;
  const educationData = educationRef.value.data;
  const advantageData = advantageEditor.value.quill.getContents();
  const advantageHtmlData = advantageEditor.value.quill.getSemanticHTML();
  const worksData = worksRef.value.data;
  const projectsData = projectsRef.value.data;
  const otherData = otherRef.value.data;
  const data = {
    ...originData.value,
    ...baseData,
    education: educationData ? JSON.stringify(educationData) : '',
    advantage: advantageData.ops ? JSON.stringify(advantageData.ops) : '',
    advantageHtml: advantageHtmlData,
    works: worksData ? JSON.stringify(worksData) : '',
    projects: projectsData ? JSON.stringify(projectsData) : '',
    other: otherData,
  }
  submitLoading.value = true;
  const newData = await useRequestPut<Resume>(Api.Resume.Update(), data);
  submitLoading.value = false;

  if (newData) {
    originData.value = newData;
    await nextTick();
    await renderResume();
  }
  renderRunning.value = false;
}

const handleGenerate = async () => {
  submitLoading.value = true;
  const data = await useRequestPost(Api.Resume.Generate(), {
    type: originData.value?.template.path as string,
    title: originData.value?.title as string,
    id: originData.value?.id as string
  });
  submitLoading.value = false;
  if (data) {
    toast.add({
      title: '温馨提示',
      description: '你的简历正在生成中，请稍等...',
      color: 'success'
    });
    submitLoading.value = true;
    setTimeout(() => {
      router.replace('/profile/generate');
      submitLoading.value = false;
    }, 2e3);
  }
}

const renderResume = () => {
  const container = document.querySelector('#resume-container') as HTMLDivElement;
  if (!container) return;
  container.innerHTML = '';
  const el = document.querySelector('#resume') as HTMLElement;
  const resumeWidth = 794;
  const scale = deviceType.value === 'web' ? 0.6 : window.innerWidth / resumeWidth;
  // const resumeHeight = 1123;
  // const pageHeight = el.offsetHeight;
  // const page = Math.ceil(pageHeight / resumeHeight);
  return new Promise(resolve => {
    html2canvas(el).then(canvas => {
      canvas.style.transform = `scale(${scale})`;
      canvas.style.transformOrigin = 'left top';
      const box = document.createElement('div');
      box.style = `
        width: ${resumeWidth * scale}px;
        height: ${parseInt(canvas.style.height) * scale}px;
        overflow: hidden;
        background: #000;
      `;
      box.append(canvas);
      container.appendChild(box);
    }).finally(() => resolve(null));
  })
}

const initData = async () => {
  const id = route.query.id as string;
  if (!id) {
    return;
  }
  submitLoading.value = true;
  const data = await useRequestGet<Resume>(Api.Resume.Get(), { id });
  submitLoading.value = false;
  requestLoading.value = true;

  if (data) {
    originData.value = data;
    requestAnimationFrame(async () => {
      await nextTick();
      baseRef.value.setData(data);
      if (data.advantage) {
        advantageEditor.value.quill.setContents(JSON.parse(data.advantage));
      }
      worksRef.value.setData(data);
      projectsRef.value.setData(data);
      educationRef.value.setData(data);
      otherRef.value.setData(data);
    });
  }
}

const onChangeTemplate = async (templateId: string) => {
  if (!originData.value) return;
  const { template, ...data } = originData.value;
  const newData = await useRequestPut<Resume>(Api.Resume.Update(), {
    ...data,
    templateId
  });
  if (newData) {
    originData.value = newData;
    await nextTick();
    renderResume();
  }
}

const handleRunAI = async () => {
  if (!aiContent.value) return;
  submitLoading.value = true;
  const data = await useRequestPost<string>(Api.Ai.GenerateContent(), {
    content: aiContent.value,
    lastContent: aiGenerateContent.value
  });
  submitLoading.value = false;
  if (data) {
    aiGenerateContent.value = data;
  }
}

const handleToForm = async () => {
  advantageEditor.value.quill.setText(aiGenerateContent.value);
  aiContent.value = '';
  aiGenerateContent.value = '';
  openAiModal.value = false;
}

onMounted(async () => {
  await initData();
  await nextTick();
  renderResume();
});
</script>

<template>
  <div v-if="originData && requestLoading" class="w-full flex-vertical gap-2 py-2 max-lg:overflow-hidden">
    <div class="w-[1100px] bg-white p-2 shadow-md shadow-neutral-200 border-t border-neutral-100 rounded-md flex gap-x-4 justify-between fixed z-50 max-lg:w-full">
      <ResumeTemp @change="onChangeTemplate" />
      <div class="flex items-center gap-x-4 max-lg:gap-x-2">
        <UButton
          v-if="deviceType === 'mobile'"
          :loading="submitLoading"
          color="warning"
          class="cursor-pointer"
          @click="handlePreview"
        >查看</UButton>
        <UButton
          :loading="submitLoading"
          color="success"
          class="cursor-pointer"
          @click="handleSave"
        >保存</UButton>
        <UButton
          :loading="submitLoading"
          color="info"
          class="cursor-pointer"
          @click="handleGenerate"
        >导出PDF</UButton>
      </div>
    </div>
    <div class="w-full flex pt-16">
      <div class="w-[calc(100%-490px)] overflow-hidden p-4 shadow-neutral-200 shadow-sm border-t border-neutral-100 max-lg:w-full">
        <div class="mt-6">
          <MultiTitle title="基本信息" subtitle="请填写基本信息" />
          <ResumeBase ref="baseRef" class="mt-6" />
        </div>
        
        <div class="mt-6">
          <div class="flex justify-between items-center">
            <MultiTitle title="个人优势" subtitle="请填写个人优势" />
            
            <UModal
              v-model:open="openAiModal"
              title="AI辅助生成内容"
              description="请输入你需要的内容，AI为你生成你的优势项"
            >
              <UButton
                color="info"
                icon="i-lucide-rocket"
                size="md"
                variant="solid"
                class="cursor-pointer"
              >使用AI生成</UButton>
              <template #body>
                <textarea
                  v-model="aiContent"
                  class="w-full resize-none outline-none border border-neutral-300 p-2 rounded-md text-sm text-neutral-800 h-24"
                  maxlength="100"
                  placeholder="请输入你需要辅助生成的内容，例如：&#10;我是一个2025届刚毕业的学生，熟悉blender建模，请帮我生成我的个人优势。"
                />
                <div v-show="aiGenerateContent" class="mt-2">
                  <h2 class="text-blue-500 font-bold text-xs">生成结果：</h2>
                  <div
                    v-for="(item, idx) in aiGenerateContent.split('\n')"
                    :key="idx"
                    v-dompurify-html="item"
                    class="text-neutral-800 text-xs"
                  />
                </div>
              </template>
              <template #footer>
                <div class="w-full flex justify-end gap-x-2">
                  <UButton
                    :loading="submitLoading"
                    @click="handleRunAI"
                  >生成</UButton>
                  <UButton
                    v-if="aiGenerateContent.length"
                    color="info"
                    :loading="submitLoading"
                    @click="handleToForm"
                  >导入到表单</UButton>
                </div>
              </template>
            </UModal>
          </div>
          <RichEditor id="editor-advantage" ref="advantageEditor" />
        </div>

        <div class="mt-6">
          <ResumeList ref="worksRef" :type="ResumeListEnum.WORKS" />
        </div>

        <div class="mt-6">
          <ResumeList ref="projectsRef" :type="ResumeListEnum.PROJECTS" />
        </div>

        <div class="mt-6">
          <ResumeEducation ref="educationRef" />
        </div>

        <div class="mt-6">
          <ResumeOther ref="otherRef" />
        </div>

      </div>
      <div v-if="deviceType === 'web'" class="w-[490px] h-[80dvh] overflow-y-auto px-2 py-1 shadow-neutral-200 shadow-sm border-t border-neutral-100 overflow-hidden small-scroll bg-neutral-50 fixed right-[calc(100%*0.5-1100px*0.5)]">
        <USkeleton v-show="renderRunning" class="w-full h-full absolute left-0 top-0 bg-neutral-300" />
        <div v-show="!renderRunning" id="resume-container" />
      </div>
      <template v-else>
        <Transition name="slide">
            <div
              v-show="isShowPreview"
              class="fixed left-0 top-0 w-full h-dvh overflow-hidden z-50 flex-vertical"
              @click.stop
            >
            <div class="w-full h-12 bg-neutral-200 flex-center justify-end px-3 gap-x-2">
              <UButton
                :loading="submitLoading"
                color="primary"
                class="cursor-pointer"
                @click="isShowPreview = false"
              >继续编辑</UButton>
              <UButton
                :loading="submitLoading"
                color="info"
                class="cursor-pointer"
                @click="handleGenerate"
              >导出PDF</UButton>
            </div>
            <div class="flex-1 bg-white overflow-y-auto">
              <USkeleton v-show="renderRunning" class="w-full h-full absolute left-0 top-0 bg-neutral-300" />
              <div v-show="!renderRunning" id="resume-container" />
              <div style="height: 500px" />
            </div>
          </div>
        </Transition>
      </template>
    </div>
    
    <div class="w-[794px] fixed -top-[1000%] -left-[1000%] -z-10" @click.prevent>
      <component :is="getRenderTemplate" id="resume" :data="originData" />
    </div>
  </div>
  <div v-else-if="!requestLoading">
    <div class="w-full h-[70dvh]">
      <LoadingBox />
    </div>
  </div>
  <div v-else>
    <div class="w-96 mx-auto flex-vertical items-center p-6 rounded-md border-t border-neutral-100 shadow-md shadow-neutral-200 mt-16">
      <h2 class="text-xl font-bold">没找到简历信息，请先创建简历！</h2>
      <UButton color="success" class="mt-6">
        <NuxtLink to="/resume/create">即刻创建</NuxtLink>
      </UButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>