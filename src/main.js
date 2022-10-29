import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import '@/assets/layouts/'

createApp(App)
.use(store)
.use(router)
.mount('#app')
