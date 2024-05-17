import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Импорт файла с настройкой маршрутов
import store from './store'

createApp(App).use(router).use(store).mount('#app')