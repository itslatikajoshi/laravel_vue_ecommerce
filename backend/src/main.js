import { createApp } from 'vue'
import './index.css'
import store from './store'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(store)
.use(router)
.mount('#app')
