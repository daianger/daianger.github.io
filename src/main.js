import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/stylesheets/common.css'; // ここを追加

createApp(App).use(router).mount('#app')
