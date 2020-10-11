import VueAxios from 'vue-axios';
import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { COVID_API_URL } from '../services/config';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  Vue.use(VueAxios, axios);
  Vue.axios.defaults.baseURL = COVID_API_URL;
  Vue.axios.defaults.headers['X-RapidAPI-Host'] = 'coronavirus-smartable.p.rapidapi.com';
  Vue.axios.defaults.headers['X-RapidAPI-Key'] = process.env.API_KEY;
});
