import { AppStateInterface } from './state';
import {
  SET_COUNTRY_SEARCH_TERM,
  SET_LOADING_STATE,
} from '../types/mutations.types';

interface AppMutationsInterface {
  [SET_COUNTRY_SEARCH_TERM](state: AppStateInterface, term: string): void;
  [SET_LOADING_STATE](state: AppStateInterface, payload: boolean): void;
}

export const AppMutations: AppMutationsInterface = {
  [SET_COUNTRY_SEARCH_TERM](state, term) {
    state.countrySearchTerm = term;
  },
  [SET_LOADING_STATE](state, payload) {
    state.isLoading = payload;
  },
};
