import { ActionContext } from 'vuex';
import { AppStateInterface } from './state';
import {
  SET_COUNTRY_SEARCH_TERM,
} from '../types/mutations.types';
import {
  FILTER_COUNTRY_NAMES,
} from '../types/actions.types';
import { StoreInterface } from '..';

interface AppActionsInterface {
  [FILTER_COUNTRY_NAMES](
    context: ActionContext<AppStateInterface, StoreInterface>,
    term: string): void;
}

export const AppActions: AppActionsInterface = {
  [FILTER_COUNTRY_NAMES]({ commit }, term) {
    commit(SET_COUNTRY_SEARCH_TERM, term);
  },
};
