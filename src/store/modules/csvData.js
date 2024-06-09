const state = {
  csvData: []
};

const mutations = {
  setCsvData(state, data) {
    state.csvData = data;
  }
};

const actions = {
  updateCsvData({ commit }, data) {
    commit('setCsvData', data);
  }
};

const getters = {
  csvData: state => state.csvData
};

export default {
  state,
  mutations,
  actions,
  getters
};
