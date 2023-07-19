import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores/index'
import { showMessage } from '@/utils/toast'

import HomeView from '@/views/front/index.vue';
import errorView from '@/views/404.vue';

const routes: RouteRecordRaw[] = [
	// 博客前台页面
	{ path: '/', name: 'home', component: HomeView },
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: errorView,
		meta: { layout: 'auth' },
	},
];

const router = createRouter({
	history: createWebHashHistory(''),
	linkExactActiveClass: 'active',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	},
});

const whiteList = ['/admin/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
	const store = useAppStore();

	if (to?.meta?.layout == 'auth') {
		store.setMainLayout('auth');
	} else {
		store.setMainLayout('app');
	}

	const hasToken = store.token;

	if (to.path.indexOf('logout') !== -1) {
		store.removeToken();
		next(`/admin/login?redirect=${to.path}`);
	}

	// 如果是前往后台管理页面
	if (to.path.indexOf('admin') !== -1) {
		// 如果已经有token
		if (hasToken) {
			next()
		} else {
			// 没有token
			if (whiteList.indexOf(to.path) !== -1) {
				// in the free login whitelist, go directly
				next()
			} else {
				showMessage('请登录后再访问！', 'error');
				// other pages that do not have permission to access are redirected to the login page.
				next(`/admin/login?redirect=${to.path}`)
			}
		}
	} else {
		next();
	}
});
router.afterEach((to, from, next) => {

});
export default router;
