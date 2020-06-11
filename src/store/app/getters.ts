import { AppStateInterface } from './state';
import { GET_FILTERED_COUNTRIES } from '../types/getters.types';

interface AppGettersInterface {
  [GET_FILTERED_COUNTRIES](state: AppStateInterface): Array<{ value: string; label: string }>;
}

export const AppGetters: AppGettersInterface = {
  [GET_FILTERED_COUNTRIES](state) {
    return state.countries.filter(
      (country) => country.label.toLowerCase().includes(state.countrySearchTerm.toLowerCase()),
    );
  },
};
