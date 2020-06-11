<template>
  <q-page>
    <stat-cards :stats="stats" />
    <div class="row q-px-md q-pt-md q-col-gutter-md">
      <time-series-chart :data="stats.history" />
      <regional-data-table :data="stats.breakDowns" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Stats } from 'components/models';
import StatCards from 'components/StatCards.vue';
import TimeSeriesChart from 'components/TimeSeriesChart.vue';
import { FETCH_STATS } from '../store/types/actions.types';

const stats = namespace('stats');

@Component({
  components: {
    StatCards,
    TimeSeriesChart,
    RegionalDataTable: () => import('components/RegionalDataTable.vue'),
  },
})
export default class HomeView extends Vue {
  @stats.Action(FETCH_STATS)
  fetchStats!: () => Promise<void>;

  @stats.State('stats')
  stats!: Stats;

  async created() {
    await this.fetchStats();
  }
}
</script>
