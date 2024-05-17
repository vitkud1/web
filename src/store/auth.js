import router from "@/router";
// import instance from "@/middlewares";

export default {
    name: 'auth',
    state: () => ({
        isAuth: false
    }),
    getters: {
    },
    mutations: {
        setAuth(state, isAuth) {
            state.isAuth = isAuth
        }
    },
    actions: {
        async login({ commit }, { username, password }) {
            console.log(123123);
            let response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ username: username, password: password })
            })
            if (response?.status == 401 || response?.status == 404 || response?.status == 403) {
                window.alert('Неверный username или пароль')
            } else if (response?.status == 429) { //anti trottle
                window.alert('Слишком много запросов. Попробуйте позже')
            } else {
                await response.json()
                    .then((result) => {
                        commit('setAuth', true)
                        localStorage.setItem('accessToken', result.accessToken)
                        localStorage.setItem('uid', result.uid)
                        router.push('/')
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }

        }
    },
    modules: {
    },
    namespaced: true
}
