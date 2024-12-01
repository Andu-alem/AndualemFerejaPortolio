import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Credentials from '../views/Credentials.vue'
import Skills from '../views/Skills.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/credentials',
        name: 'Credentials',
        component: Credentials
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router