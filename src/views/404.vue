<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#546ddb] to-[#ffffff]">
    <div class="text-center p-5 font-semibold">
      <h2 class="text-[50px] md:text-[80px] leading-none mb-8 font-bold">404</h2>
      <h4 class="mb-5 font-semibold text-xl sm:text-5xl text-primary">哦嚯!</h4>
      <p class="text-lg">你来到了无人的领地!</p>
      <router-link to="/" class="btn btn-primary mt-10 w-max mx-auto">返回首页</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { useMeta } from '@/composables/use-meta';
// useMeta({ title: '404' });
</script>
