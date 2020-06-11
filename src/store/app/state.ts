import countries from 'src/components/countries.json';

export interface AppStateInterface {
  countrySearchTerm: string;
  isLoading: boolean;
  countries: Array<{ value: string; label: string }>;
}

export const AppState = (): AppStateInterface => ({
  countrySearchTerm: '',
  isLoading: false,
  countries,
});
