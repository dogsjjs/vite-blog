import { defineStore } from 'pinia';
import appSetting from '@/app-setting';
import { getToken, setToken, removeToken } from '@/utils/tokenUtils'

export const useAppStore = defineStore('app', {
	state: () => ({
		isDarkMode: false, // 是否为黑夜模式
		mainLayout: 'app', // 布局样式
		theme: 'light',    // 主题
		isShowMainLoader: true, // 是否显示加载动画
		sidebar: false,
		token: getToken()
	}),

	actions: {
		// 设置布局样式
		setMainLayout(payload: any = null) {
			this.mainLayout = payload; // app, auth
		},
		// 切换主题
		toggleTheme(payload: any = null) {
			payload = payload || this.theme; // light, dark
			localStorage.setItem('theme', payload);
			this.theme = payload;
			if (payload == 'light') {
				this.isDarkMode = false;
			} else {
				this.isDarkMode = true;
			}

			if (this.isDarkMode) {
				document.querySelector('body')?.classList.add('dark');
			} else {
				document.querySelector('body')?.classList.remove('dark');
			}
		},
		toggleSidebar(state: boolean = false) {
			this.sidebar = !this.sidebar;
		},
		// 切换加载动画是否展示
		toggleMainLoader(state: boolean = false) {
			this.isShowMainLoader = true;
			setTimeout(() => {
				this.isShowMainLoader = false;
			}, 500);
		},
		// 设置token
		setToken(token: string = '') {
			this.token = token
			setToken(token)
		},
		// 删除token
		removeToken() {
			this.token = ''
			removeToken()
		}
	},
	getters: {},
});
