import { createStore } from 'vuex';
import auth from './modules/auth';  
import csvData from './modules/csvData';

export default createStore({
  modules: {
    auth,
    csvData
  }
});