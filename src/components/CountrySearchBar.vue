<template>
  <q-select
    style="min-width: 100%"
    class="q-pa-md"
    rounded
    outlined
    v-model="searchTerm"
    use-input
    fill-input
    hide-selected
    input-debounce="0"
    @input-value="filterCountries"
    @input="getCountryData"
    :options="filteredCountries"
    label="Search Countries"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon
        name="close"
        @click.stop="resetSearch"
        class="cursor-pointer"
      />
    </template>

    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import {
  FILTER_COUNTRY_NAMES,
  FETCH_STATS,
  FETCH_NEWS,
} from 'src/store/types/actions.types';
import { GET_FILTERED_COUNTRIES } from 'src/store/types/getters.types';

const stats = namespace('stats');
const app = namespace('app');
const news = namespace('news');

@Component
export default class CountrySearchBar extends Vue {
  searchTerm = '';

  @app.Getter(GET_FILTERED_COUNTRIES)
  filteredCountries!: Array<{ value: string; label: string }>;

  @app.Action(FILTER_COUNTRY_NAMES)
  filterCountries!: void;

  @stats.Action(FETCH_STATS)
  fetchStats!: (country: { value: string; label: string }) => Promise<void>;

  @news.Action(FETCH_NEWS)
  fetchNews!: (country: { value: string; label: string }) => Promise<void>;

  getCountryData(country: { value: string; label: string }) {
    this.fetchStats(country);
    this.fetchNews(country);
  }

  resetSearch() {
    this.searchTerm = '';
  }
}
</script>
