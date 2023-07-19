<template>
	<div>
		<nav
			class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
			<div class="bg-white dark:bg-[#0e1726] h-full flex flex-col justify-between pb-5">
				<div>
					<div class="flex justify-between items-center px-4 py-3">
						<router-link to="/" class="main-logo flex items-center shrink-0">
							<img class="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="" />
							<span
								class="text-2xl ml-1.5 font-semibold italic  align-middle lg:inline dark:text-white-light">HBLOG</span>
						</router-link>
						<a href="javascript:;"
							class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
							@click="store.toggleSidebar()">
							<Icon icon="heroicons:chevron-double-left" />
						</a>
					</div>
					<perfect-scrollbar :options="{
						swipeEasing: true,
						wheelPropagation: false,
					}" class="relative">
						<ul class="relative font-semibold space-y-0.5 p-4 py-0">
							<li v-for="menuItem, index in blogMenuItems" :key="index" class="menu nav-item">
								<button type="button" class="nav-link group w-full" :class="{ active: activeDropdown === menuItem.title }"
									@click="activeDropdown === menuItem.title ? (activeDropdown = null) : (activeDropdown = menuItem.title)">
									<div class="flex items-center">
										<Icon :icon="menuItem.icon" />
										<span class="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
											{{ menuItem.name }}
										</span>
									</div>
									<div v-if="menuItem.children" :class="{ '!rotate-90': activeDropdown === menuItem.title }">
										<Icon icon="heroicons:chevron-right" />
									</div>
								</button>
								<vue-collapsible v-if="menuItem.children" :isOpen="activeDropdown === menuItem.title">
									<ul class="sub-menu text-gray-500">
										<li v-for="childernMenuItem, childrenIndex in menuItem.children" :key="childrenIndex">
											<router-link :to="childernMenuItem.path" @click="toggleMobileMenu">
												<Icon :icon="childernMenuItem.icon" />&nbsp;&nbsp;{{ childernMenuItem.name }}
											</router-link>
										</li>
									</ul>
								</vue-collapsible>
							</li>
						</ul>
					</perfect-scrollbar>
				</div>

			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

import { useAppStore } from '@/stores/index';
import { useRoute } from 'vue-router';
import VueCollapsible from 'vue-height-collapsible/vue3';
import { menu, adminMenu } from '@/constant/menu';
const store = useAppStore();
const route = useRoute();
const activeDropdown: any = ref('');
const blogMenuItems: any = ref([]);

watch(route, (to, from) => {
	checkMenu();
});

onMounted(() => {
	const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
	if (selector) {
		selector.classList.add('active');
		const ul: any = selector.closest('ul.sub-menu');
		if (ul) {
			let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
			if (ele.length) {
				ele = ele[0];
				setTimeout(() => {
					ele.click();
				});
			}
		}
	}
});

const checkMenu = () => {
	if (route.path.indexOf('admin') !== -1) {
		blogMenuItems.value = adminMenu.filter(menu => !menu.type);
	} else {
		blogMenuItems.value = menu
	}
}

const toggleMobileMenu = () => {
	if (window.innerWidth < 1024) {
		store.toggleSidebar();
	}
};
</script>

<style scoped>

</style>