import { Module } from 'vuex';
import { NewsActions } from './actions';
import { NewsGetters } from './getters';
import { NewsMutations } from './mutations';
import { NewsState, NewsStateInterface } from './state';
import { StoreInterface } from '..';

const NewsModule: Module<NewsStateInterface, StoreInterface> = {
  namespaced: true,
  getters: {
    ...NewsGetters,
  },
  mutations: {
    ...NewsMutations,
  },
  actions: {
    ...NewsActions,
  },
  state: {
    ...NewsState(),
  },
};

export default NewsModule;
