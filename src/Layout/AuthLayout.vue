<template>
	<div class="text-black dark:text-white-dark">
		<!-- 加载动画 -->
		<div v-show="store.isShowMainLoader"
			class="screen_loader fixed inset-0 bg-[#fafafa] dark:bg-[#060818] z-[60] grid place-content-center animate__animated">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
				style="margin: auto; display: block; shape-rendering: auto;" width="100x"
				height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<circle cx="50" cy="50" r="32" stroke-width="8" stroke="#4361ee"
					stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
					<animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
						values="0 50 50;360 50 50"></animateTransform>
				</circle>
				<circle cx="50" cy="50" r="23" stroke-width="8" stroke="#a5b1ea"
					stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none"
					stroke-linecap="round">
					<animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
						values="0 50 50;-360 50 50"></animateTransform>
				</circle>
			</svg>
		</div>

		<div class="fixed bottom-6 right-6 z-50">
			<template v-if="showTopButton">
				<button type="button"
					class="btn btn-outline-primary rounded-full p-2 animate-pulse bg-[#fafafa] dark:bg-[#060818] dark:hover:bg-primary"
					@click="goToTop">
					<Icon icon="heroicons:arrow-small-up" class="h-4 w-4" />
				</button>
			</template>
		</div>
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAppStore } from '@/stores/index';
const store = useAppStore();
const showTopButton = ref(false);
onMounted(() => {
	window.onscroll = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			showTopButton.value = true;
		} else {
			showTopButton.value = false;
		}
	};

	store.toggleMainLoader();
});

const goToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
</script>
