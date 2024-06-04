import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Импорт файла с настройкой маршрутов
import store from './store'

const app = createApp(App);
app.use(router);
app.mount('#app');
createApp(App).use(router).use(store).mount('#app')