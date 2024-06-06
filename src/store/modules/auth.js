import axios from 'axios';

const state = {
  user: null
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

const actions = {
  async register({ commit }, formData) {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', formData);
      commit('setUser', response.data.user);
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  }
};

const getters = {
  user: state => state.user
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};