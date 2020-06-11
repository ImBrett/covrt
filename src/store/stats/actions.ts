import { ActionContext } from 'vuex';
import { StatsStateInterface } from './state';
import { CovidService } from '../../services/api.service';
import {
  SET_STATS,
  SET_LOADING_STATE,
} from '../types/mutations.types';
import {
  FETCH_STATS,
} from '../types/actions.types';
import { StoreInterface } from '..';

interface StatsActionsInterface {
  [FETCH_STATS](
    context: ActionContext<StatsStateInterface, StoreInterface>,
    country: { value: string; label: string }): void;
}

export const StatsActions: StatsActionsInterface = {
  async [FETCH_STATS]({ commit }, country = { value: 'global', label: 'Global' }) {
    commit(`app/${SET_LOADING_STATE}`, true, { root: true });
    const response = await CovidService.fetchStats(country.value);
    commit(SET_STATS, {
      totalConfirmedCases: response.stats.totalConfirmedCases,
      totalRecoveredCases: response.stats.totalRecoveredCases,
      totalDeaths: response.stats.totalDeaths,
      totalActive: response.stats.totalConfirmedCases - (
        response.stats.totalRecoveredCases + response.stats.totalDeaths
      ),
      newlyConfirmedCases: response.stats.newlyConfirmedCases,
      newlyRecoveredCases: response.stats.newlyRecoveredCases,
      newDeaths: response.stats.newDeaths,
      newActive: response.stats.newlyConfirmedCases - (
        response.stats.newlyRecoveredCases + response.stats.newDeaths
      ),
      percentRecovered: Math.round((
        response.stats.totalRecoveredCases / response.stats.totalConfirmedCases
      ) * 100),
      percentDeaths: Math.round((
        response.stats.totalDeaths / response.stats.totalConfirmedCases
      ) * 100),
      percentActive: Math.round(
        100 - (
          (response.stats.totalRecoveredCases + response.stats.totalDeaths)
          / response.stats.totalConfirmedCases) * 100,
      ),
      history: response.stats.history,
      breakDowns: response.stats.breakdowns,
    });
    commit(`app/${SET_LOADING_STATE}`, false, { root: true });
  },
};
