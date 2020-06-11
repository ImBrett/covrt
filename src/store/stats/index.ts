import { Module } from 'vuex';
import { StatsActions } from './actions';
import { StatsGetters } from './getters';
import { StatsMutations } from './mutations';
import { StatsState, StatsStateInterface } from './state';
import { StoreInterface } from '..';

const StatsModule: Module<StatsStateInterface, StoreInterface> = {
  namespaced: true,
  getters: {
    ...StatsGetters,
  },
  mutations: {
    ...StatsMutations,
  },
  actions: {
    ...StatsActions,
  },
  state: {
    ...StatsState(),
  },
};

export default StatsModule;
