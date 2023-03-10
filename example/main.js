import { createApp } from 'vue';
import 'virtual:windi.css'
import App from './App.vue';
import ElModalHook from 'el-modal-hook';

const app = createApp(App);
app.use(ElModalHook);
app.mount('#app');
