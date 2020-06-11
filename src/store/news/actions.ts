import { ActionContext } from 'vuex';
import { NewsStateInterface } from './state';
import { NewsService } from '../../services/api.service';
import {
  SET_NEWS,
  SET_LOADING_STATE,
} from '../types/mutations.types';
import {
  FETCH_NEWS,
} from '../types/actions.types';
import { StoreInterface } from '..';

interface NewsActionsInterface {
  [FETCH_NEWS](
    context: ActionContext<NewsStateInterface, StoreInterface>,
    country: { value: string; label: string }): void;
}

export const NewsActions: NewsActionsInterface = {
  async [FETCH_NEWS]({ commit }, country = { value: 'global', label: 'Global' }) {
    commit(`app/${SET_LOADING_STATE}`, true, { root: true });
    const response = await NewsService.fetchNews(country.value);
    commit(SET_NEWS, response.news);
    commit(`app/${SET_LOADING_STATE}`, false, { root: true });
  },
};
