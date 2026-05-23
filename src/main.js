import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tg from './telegram/'

console.log(tg)

createApp(App)
  .use(router)
  .mount('#app')