import { $themeConfig } from '../theme.config';
import { useAppStore } from '@/stores/index';

export default {
	init() {
		const store = useAppStore();
		// 主题设置
		let theme: any = localStorage.getItem('theme'); // light, dark
		theme = theme || $themeConfig.theme;
		store.toggleTheme(theme);
	},

};
