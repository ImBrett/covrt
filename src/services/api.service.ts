import Vue from 'vue';
import { AxiosResponse } from 'axios';

/**
 * Checks the status of the response for errors
 *
 * @param response The response to check
 * @return boolean
 */
const checkResponse = ({ status, data }: AxiosResponse): boolean => {
  if (data.errors) {
    throw new Error(data.errors);
  }

  switch (status) {
    case 200: { // SUCCESS
      return true;
    }
    default: {
      return false;
    }
  }
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
      return response.data.errors;
    } catch (e) {
      throw new Error(`[CVRT] API error: ${e}`);
    }
  },
};

export const StatsService = {
  /**
   * Queries for stats by country
   *
   * @param country The country to search
   */
  async fetchStats(country = 'global') {
    const response = await ApiService.get(`stats/v1/${country}/`);
    return response;
  },
};

export const NewsService = {
  /**
   * Queries for news by country
   *
   * @param country The country to search
   */
  async fetchNews(country = 'global') {
    const response = await ApiService.get(`news/v1/${country}/`);
    return response;
  },
};
