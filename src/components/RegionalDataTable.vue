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
        <div class="text-h5">Regional Data</div>
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

  columns = [
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
      sortable: true,
    },
    {
      name: 'active',
      align: 'right',
      label: 'Active',
      field: (row: BreakDown) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        row.totalConfirmedCases - (row.totalRecoveredCases + row.totalDeaths),
      sortable: true,
    },
    {
      name: 'recovered',
      align: 'right',
      label: 'Recovered',
      field: (row: BreakDown) => row.totalRecoveredCases,
      sortable: true,
    },
    {
      name: 'deaths',
      align: 'right',
      label: 'Deaths',
      field: (row: BreakDown) => row.totalDeaths,
      sortable: true,
    },
  ];
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
