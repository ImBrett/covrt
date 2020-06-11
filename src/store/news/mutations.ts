import { NewsItem } from 'components/models';
import { NewsStateInterface } from './state';
import {
  SET_NEWS,
} from '../types/mutations.types';

interface NewsMutationsInterface {
  [SET_NEWS](state: NewsStateInterface, news: Array<NewsItem>): void;
}

export const NewsMutations: NewsMutationsInterface = {
  [SET_NEWS](state, news) {
    state.news = news;
  },
};
