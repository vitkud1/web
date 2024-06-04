import router from "@/router";
import instance from "@/middlewares";

export default {
    name: 'data',
    state: () => ({
        isRegister: false
    }),
    getters: {
    },
    mutations: {
        setRegister(state, isRegister) {
            state.isRegister = isRegister
        }
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
