<template>
	<header>
		<div class="shadow-sm fixed top-0 z-10 w-full">
			<div
				class="backdrop-blur bg-white/30 flex justify-between w-full h-[60px] px-10 items-center py-2.5 dark:bg-[#0e1726]/30">
				<div class="flex justify-between items-center mr-2">
					<router-link to="/" class="flex items-center justify-center shrink-0">
						<img class="w-8 -ml-1 inline" src="/assets/images/logo.svg" alt="" />
						<span
							class="text-2xl ml-1.5 italic align-middle hidden md:inline">HBLOG</span>
					</router-link>

					<a href="javascript:;"
						class="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ml-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
						@click="store.toggleSidebar()">
						<Icon icon="heroicons:list-bullet" />
					</a>
				</div>

				<div class="ml-auto flex items-center space-x-1.5 dark:text-[#d0d2d6]">

					<ul
						class="horizontal-menu py-1.5 shadow-none font-semibold px-6 lg:space-x-1.5 xl:space-x-8 dark:text-white-light">

						<li v-for="menuItem, index in blogMenuItems" :key="index" class="menu nav-item relative">
							<a v-if="!menuItem.type" href="javascript:;" class="nav-link">
								<div class="flex items-center">
									<Icon :icon="menuItem.icon" />
									<span class="px-2">{{ menuItem.name }}</span>
								</div>
								<div v-if="menuItem.children" class="right_arrow">
									<Icon icon="heroicons:chevron-down" />
								</div>
							</a>
							<router-link v-if="menuItem.type" class="nav-link" :to="menuItem.path">
								<div class="flex items-center">
									<Icon :icon="menuItem.icon" />
									<span class="px-2">{{ menuItem.name }}</span>
								</div>
							</router-link>
							<ul v-if="!menuItem.type && menuItem.children" class="sub-menu">
								<li v-for="childernMenuItem, childrenIndex in menuItem.children" :key="childrenIndex">
									<router-link :to="childernMenuItem.path"><span class="inline-flex items-center">
											<Icon :icon="childernMenuItem.icon" class="mr-2" />{{ childernMenuItem.name }}
										</span></router-link>
								</li>
							</ul>
						</li>
					</ul>

					<div>
						<a href="javascript:;" v-show="store.theme === 'light'"
							class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
							@click="store.toggleTheme('dark')">
							<Icon icon="heroicons:moon" />
						</a>
						<a href="javascript:;" v-show="store.theme === 'dark'"
							class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
							@click="store.toggleTheme('light')">
							<Icon icon="heroicons:sun" />
						</a>
					</div>

				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { menu, adminMenu } from '@/constant/menu';

import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/index';
const store = useAppStore();
const route = useRoute();


const blogMenuItems: any = ref([]);

onMounted(() => {
	setActiveDropdown();
});

const checkMenu = () => {
	if (route.path.indexOf('admin') !== -1) {
		blogMenuItems.value = adminMenu
	} else {
		blogMenuItems.value = menu
	}
}

watch(route, () => {
	setActiveDropdown();
	checkMenu();
});

const setActiveDropdown = () => {
	const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
	if (selector) {
		selector.classList.add('active');
		const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
		for (let i = 0; i < all.length; i++) {
			all[0]?.classList.remove('active');
		}
		const ul: any = selector.closest('ul.sub-menu');
		if (ul) {
			let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
			if (ele) {
				ele = ele[0];
				setTimeout(() => {
					ele?.classList.add('active');
				});
			}
		}
	} else {
		const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
		for (let i = 0; i < all.length; i++) {
			all[0]?.classList.remove('active');
		}
	}
};

</script>