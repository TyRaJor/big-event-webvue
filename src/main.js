import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import sass from 'sass';
import axios from 'axios';
import router from '@/router';


const app = createApp(App)
app.use(router)
app.use(ElementPlus,axios,sass)
.mount('#app')