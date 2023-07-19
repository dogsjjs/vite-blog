<template>
  <div>
    <div class="fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]" :class="{ '!block': showCustomizer }"
      @click="showCustomizer = false"></div>

    <nav
      class="bg-white fixed -right-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-md transition-[right] duration-300 z-[51] dark:bg-[#0e1726] p-4"
      :class="{ '!right-0': showCustomizer }">
      <a href="javascript:;"
        class="bg-dark rounded-tl-full rounded-bl-full absolute -left-10 top-0 bottom-0 my-auto w-10 h-10 flex justify-center items-center text-white cursor-pointer"
        @click="showCustomizer = !showCustomizer">
        <Icon class="animate-[spin_4s_linear_infinite] w-5 h-5" icon="heroicons:cog-6-tooth" />
      </a>
      <perfect-scrollbar :options="{
        swipeEasing: true,
        wheelPropagation: false,
      }" class="relative h-full overflow-x-hidden pr-3 -mr-3">
        <div>
          <div class="text-center relative pb-5">
            <a href="javascript:;" class="absolute top-0 right-0 opacity-30 hover:opacity-100 dark:text-white"
              @click="showCustomizer = false">
              <Icon icon="heroicons:x-mark" />
            </a>
            <h6 class="mb-1 dark:text-white">主题修改</h6>
          </div>
          <div class="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
            <h5 class="mb-1 text-base dark:text-white leading-none">配色方案</h5>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <button type="button" class="btn btn-outline-primary flex items-center gap-2" :class="[store.theme === 'light' ? 'active' : '']"
                @click="store.toggleTheme('light')">
                <Icon class="w-5 h-5 shrink-0" icon="heroicons:sun" />
                Light
              </button>
              <button type="button" class="btn btn-outline-primary flex items-center gap-2" :class="[store.theme === 'dark' ? 'active' : '']"
                @click="store.toggleTheme('dark')">
                <Icon class="w-5 h-5 shrink-0" icon="heroicons:moon" />
                Dark
              </button>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useAppStore } from '@/stores/index';
const store = useAppStore();
const showCustomizer = ref(false);

</script>

<style scoped></style>
