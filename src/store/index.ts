import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import app from './app';
import { AppStateInterface } from './app/state';

import stats from './stats';
import { StatsStateInterface } from './stats/state';

import news from './news';
import { NewsStateInterface } from './news/state';

export interface StoreInterface {
  app: AppStateInterface;
  stats: StatsStateInterface;
  news: NewsStateInterface;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      app,
      stats,
      news,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });

  return Store;
});
