import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from './config';

const checkResponse = ({ status, data }: AxiosResponse): boolean => {
  switch (status) {
    case 200: {
      if (data.errors) {
        throw new Error(data.errors);
      }
      return true;
    }
    case 201: {
      if (data.errors) {
        throw new Error(data.errors);
      }
      return true;
    }
    case 204: {
      if (data.errors) {
        throw new Error(data.errors);
      }
      return true;
    }
    default: {
      return false;
    }
  }
};

export const initApiService = (): void => {
  Vue.use(VueAxios, axios);
  Vue.axios.defaults.baseURL = API_URL;
  Vue.axios.defaults.headers['Subscription-Key'] = process.env.API_KEY;
};

export const ApiService = {
  async query(resource: string, params: unknown) {
    try {
      const response = await Vue.axios.get(`${resource}/${params}`);
      if (checkResponse(response)) {
        return response.data;
      }
      return response;
    } catch (e) {
      throw new Error(`[C19T] API error: ${e}`);
    }
  },

  async get(resource: string) {
    try {
      const response = await Vue.axios.get(resource);
      if (checkResponse(response)) {
        return response.data;
      }
      return response;
    } catch (e) {
      throw new Error(`[C19T] API error: ${e}`);
    }
  },
};

export const CovidService = {
  async fetchStats(country = 'global') {
    const response = await ApiService.get(`stats/${country}`);
    return response;
  },
};

export const NewsService = {
  async fetchNews(country = 'global') {
    const response = await ApiService.get(`news/${country}`);
    return response;
  },
};
