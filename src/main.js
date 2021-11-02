import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import Vue3Material from 'vue3-material'

createApp(App)
  // .use(Vue3Material)
  .use(store)
  .use(router)
  .mount('#app')
