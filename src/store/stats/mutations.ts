import { Stats } from 'components/models';
import { StatsStateInterface } from './state';
import {
  SET_STATS,
} from '../types/mutations.types';

interface StatsMutationsInterface {
  [SET_STATS](state: StatsStateInterface, stats: Stats): void;
}

export const StatsMutations: StatsMutationsInterface = {
  [SET_STATS](state, stats) {
    state.stats = stats;
  },
};
