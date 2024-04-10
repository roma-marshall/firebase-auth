import { createWebHistory, createRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import App from '../App.vue'
import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Feed from '../components/Feed.vue'
import Account from '../components/Account.vue'

const routes = [
    { path: '/app', component: App },
    { path: '/', component: Home },
    { path: '/header', component: Header },
    { path: '/footer', component: Footer },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/feed', component: Feed, meta: { requiresAuth: true } },
    { path: '/account', component: Account, meta: { requiresAuth: true }, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            alert('you dont have access')
            next('/')
        }
    } else {
        next()
    }
})

export default router