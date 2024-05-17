import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
// import Register from '../views/Register.vue'

// import instance from '../middlewares'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach(async (to, from, next) => {
//     const uid = localStorage.getItem('uid')
//     const requireAuth = to.matched.some(record => record?.meta.auth)

//     if (requireAuth) {
//         await instance.get(`/api/auth/me`)
//             .then((res) => {
//                 next()
//             })
//             .catch((err) => {
//                 if (err.response.status == 403 || err.response.status == 401) {
//                     next('/login')
//                 }
//             })
//     } else {
//         next()
//     }
//     // next()
// })

export default router
