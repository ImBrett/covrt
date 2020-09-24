<template>
  <div class="col-12 col-lg-6">
    <data-table-skeleton v-if="isLoading" />
    <q-table
      v-else
      class="my-sticky-header-column-table"
      title="Regional Data"
      :filter="filter"
      :data="data"
      :columns="columns"
      row-key="region"
    >
      <template v-slot:top>
        <div class="text-h5">
          Regional Data
        </div>
        <q-space />
        <q-input
          dense
          v-model="filter"
          label="Search Regions"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { BreakDown } from './models';
import DataTableSkeleton from './skeletons/DataTableSkeleton.vue';

const app = namespace('app');

@Component({
  components: {
    DataTableSkeleton,
  },
})
export default class RegionalDataTable extends Vue {
  filter = '';

  @Prop({ required: true })
  data!: Array<BreakDown>;

  @app.State('isLoading')
  isLoading!: boolean;

  // eslint-disable-next-line class-methods-use-this
  getProvinceOrCountryDisplay(row: BreakDown) {
    if (row.location.provinceOrState) {
      return row.location.provinceOrState;
    }
    return row.location.countryOrRegion;
  }

  get columns() {
    return [
      {
        name: 'region',
        required: true,
        label: 'Region',
        align: 'left',
        field: (row: BreakDown) => this.getProvinceOrCountryDisplay(row),
        sortable: true,
      },
      {
        name: 'confirmed',
        align: 'right',
        label: 'Confirmed',
        field: (row: BreakDown) => row.totalConfirmedCases,
        format: (val: number, row: BreakDown) =>
          `${val} (+${row.newlyConfirmedCases})`,
        sortable: true,
      },
      {
        name: 'active',
        align: 'right',
        label: 'Active',
        field: (row: BreakDown) =>
          row.totalConfirmedCases - (row.totalRecoveredCases + row.totalDeaths),
        format: (val: number, row: BreakDown) =>
          `${val} (+${row.newlyConfirmedCases -
            (row.newlyRecoveredCases + row.newDeaths)})`,
        sortable: true,
      },
      {
        name: 'recovered',
        align: 'right',
        label: 'Recovered',
        field: (row: BreakDown) => row.totalRecoveredCases,
        format: (val: number, row: BreakDown) => `${val}
          (+${row.newlyRecoveredCases})`,
        sortable: true,
      },
      {
        name: 'deaths',
        align: 'right',
        label: 'Deaths',
        field: (row: BreakDown) => row.totalDeaths,
        format: (val: number, row: BreakDown) => `${val} (+${row.newDeaths})`,
        sortable: true,
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.my-sticky-header-column-table {
  height: 360px;

  th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
  }
}
</style>
