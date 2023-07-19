import { createApp } from 'vue'
// 图标
import { Icon } from '@iconify/vue'
import App from '@/App.vue'

import '@/style/main.scss'

const app = createApp(App);

// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from '@/router';
app.use(router);

import blogSetting from '@/blogSetting';
// 初始化博客设置
blogSetting.init();

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
app.use(PerfectScrollbar);

// 全局图标组件
app.component('Icon', Icon);

app.mount('#app')
