<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: boolean;
  title?: string;
  content?: string;
}>(), {
  title: '标题',
  content: '',
  modelValue: false
});

const isOpen = ref(false);
const emits = defineEmits<{
  (event: 'confirm' | 'cancel'): void,
}>();

const onCancel = () => {
  isOpen.value = false;
  emits('cancel');
}
const onConfirm = () => {
  isOpen.value = false;
  emits('confirm');
}
</script>

<template>
  <UModal v-model:open="isOpen">
    <slot />
    <template #content>
        <div class="w-80 p-6 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-t border-neutral-100 bg-white shadow-sm shadow-neutral-200 rounded-md">
          <div class="flex justify-between items-center pb-2">
            <h2 class="text-xl font-bold text-neutral-800">{{ props.title }}</h2>
          </div>
          <div class="py-2 text-sm text-neutral-800">{{ props.content }}</div>
          <div class=" pt-2 flex gap-2 justify-end">
            <UButton size="sm" color="warning" class="cursor-pointer" @click="onCancel">取消</UButton>
            <UButton size="sm" color="primary" class="cursor-pointer" @click="onConfirm">确定</UButton>
          </div>
        </div>
    </template>
  </UModal>
</template>

<style lang="scss" scoped>
</style>