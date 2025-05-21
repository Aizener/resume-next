<script setup lang="ts">
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';
import { Api } from '~/shared/apis';

const route = useRoute();
const router = useRouter();
const websiteStore = useWebsiteStore();
const loading = ref(false);

const schema = v.object({
  username: v.pipe(v.string(), v.minLength(2, '请输入2-12个字符之间'), v.maxLength(12, '请输入2-12个字符之间')),
  password: v.pipe(v.string(), v.minLength(2, '请输入2-12个字符之间'), v.maxLength(12, '请输入2-12个字符之间'))
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  username: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { username, password } = event.data;
  loading.value = true;
  const data = await useRequestPost<{ user: User, accessToken: string }>(Api.Auth.Register(), {
    auth: username, password
  });
  if (data) {
    toast.add({ title: '成功', description: '登入成功，即将进行页面跳转！', color: 'success' });
    websiteStore.saveUser(data.user);
    websiteStore.saveToken(data.accessToken);
    setTimeout(() => {
      const { redirect, ...query } = route.query;
      router.replace(redirect ? {
        path: redirect as string,
        query: query
      } : '/');
      loading.value = false;
    }, 1e3);
  } else {
    loading.value = false;
  }
}
</script>

<template>
  <div class="mx-auto w-[400px] px-4 py-8 mt-16 shadow-md shadow-neutral-200 border-t border-neutral-100 rounded-md max-lg:w-full">
    <h1 class="text-center text-2xl font-bold">用户登入</h1>
    <UForm :schema="schema" :state="state" class="space-y-4 mt-6" @submit="onSubmit">
      <UFormField label="用户名" name="username" class="flex items-start">
        <template #label>
          <h2 class="translate-y-2.5 mr-6 w-20 text-right">用户名：</h2>
        </template>
        <UInput
          v-model="state.username"
          class="w-64 max-lg:w-60"
          placeholder="请输入用户名"
        />
      </UFormField>

      <UFormField label="密码" name="password" class="flex items-start">
        <template #label>
          <h2 class="translate-y-2.5 mr-6 w-20 text-right">密码：</h2>
        </template>
        <UInput
          v-model="state.password"
          type="password"
          class="w-64 max-lg:w-60"
          placeholder="请输入密码"
        />
      </UFormField>

      <div class="flex items-center justify-end gap-x-2 mt-6">
        <UButton type="submit" class="cursor-pointer" :loading="loading">
          注册/登入
        </UButton>
      </div>

      <div class="text-xs text-yellow-600 flex mt-6 pt-4 border-t border-neutral-200">
        <span class="font-bold shrink-0 mr-2">小贴士：</span>
        <span>如果你是第一次登入，且没有相同用户名的话，将自动注册并登入；如果是已有账号的话，将在校验密码的有效性后自动登入。</span>  
      </div>
    </UForm>
  </div>
</template>

<style lang="scss" scoped>
</style>