<template>
  <div class="col-12 col-lg-6">
    <q-card>
      <q-card-section>
        <time-series-chart-skeleton v-if="isLoading" />
        <vue-apex-charts
          v-else
          style="color: #020204;"
          type="area"
          height="313px"
          :options="chartOptions"
          :series="series"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import { namespace } from 'vuex-class';
import TimeSeriesChartSkeleton from './skeletons/TimeSeriesChartSkeleton.vue';
import { History } from './models';

const app = namespace('app');

@Component({
  components: {
    VueApexCharts,
    TimeSeriesChartSkeleton,
  },
})
export default class TimeSeriesChart extends Vue {
  @Prop({ required: true })
  data!: Array<History>;

  @app.State('isLoading')
  isLoading!: boolean;

  get series() {
    return [
      {
        name: 'confirmed',
        data: this.data.map((stat) => stat.confirmed),
      },
      {
        name: 'recovered',
        data: this.data.map((stat) => stat.recovered),
      },
      {
        name: 'deaths',
        data: this.data.map((stat) => stat.deaths),
      },
      {
        name: 'active',
        data: this.data.map(
          (stat) => stat.confirmed - (stat.recovered + stat.deaths),
        ),
      },
    ];
  }

  get chartOptions() {
    return {
      colors: ['#5F4B8B', '#3eb650', '#e12b38', '#fcc133'],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: Object.values(this.data).map(({ date }) => date),
      },
      yaxis: {
        type: 'number',
        categories: Object.values(this.data).map(({ confirmed }) => confirmed),
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
}
</script>
