import router from "@/router";
import instance from "@/middlewares";

export default {
    name: 'data',
    state: () => ({
        // isAuth: false
    }),
    getters: {
    },
    mutations: {
        // setAuth(state, isAuth) {
        //     state.isAuth = isAuth
        // }
    },
    actions: {
        async getStudentByUid({ commit }) {
            const uid = localStorage.getItem('uid')
            await instance.get(`/api/v1/students/${uid}`)
                .then(res => {
                    commit('setStudent', res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
    },
    modules: {
    },
    namespaced: true
}
