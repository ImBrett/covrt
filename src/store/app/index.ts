import { Module } from 'vuex';
import { AppActions } from './actions';
import { AppGetters } from './getters';
import { AppMutations } from './mutations';
import { AppState, AppStateInterface } from './state';
import { StoreInterface } from '..';

const AppModule: Module<AppStateInterface, StoreInterface> = {
  namespaced: true,
  getters: {
    ...AppGetters,
  },
  mutations: {
    ...AppMutations,
  },
  actions: {
    ...AppActions,
  },
  state: {
    ...AppState(),
  },
};

export default AppModule;
