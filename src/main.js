import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase/config'
import router from './router/router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
initializeApp(firebaseConfig)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
