<template>
	<div class="main-section antialiased relative font-ali text-sm font-normal">
		<component v-bind:is="mainLayout"></component>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import appLayout from '@/Layout/AppLayout.vue';
import authLayout from '@/Layout/AuthLayout.vue';

import { useAppStore } from '@/stores/index';

const store = useAppStore();

const mainLayout = computed(() => {
	return store.mainLayout === 'auth' ? authLayout : appLayout;
});
</script>
