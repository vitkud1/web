import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AdminPage from '../views/AdminPage.vue'
import instance from '../middlewares'

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
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
    const requireAuth = to.matched.some(record => record?.meta.auth);

    if (requireAuth) {
        try {
            await instance.get('/api/auth/me');
            next();
        } catch (err) {
            if (err.response && (err.response.status === 403 || err.response.status === 401)) {
                next('/login');
            } else {
                next(false); // Прерывание навигации в случае других ошибок
            }
        }
    } else {
        next();
    }
});
    // const uid = localStorage.getItem('uid')
    // const requireAuth = to.matched.some(record => record?.meta.auth)

    // if (requireAuth) {
    //     await instance.get(`/api/auth/me`)
    //         .then((res) => {
    //             next()
    //         })
    //         .catch((err) => {
    //             if (err.response.status == 403 || err.response.status == 401) {
    //                 next('/login')
    //             }
    //         })
    // } else {
    //     next()
    // }
// })

export default router
