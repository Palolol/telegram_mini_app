import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Settings.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/settings', component: Settings }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router