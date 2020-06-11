<template>
  <div class="q-px-md">
    <stat-cards-skeleton v-if="isLoading" />
    <div
      class="row q-col-gutter-md"
      v-else
    >
      <div class="col-6 col-sm-3">
        <q-card class="bg-primary text-white text-center">
          <q-card-section>
            <q-icon
              name="local_hospital"
              size="2rem"
            />
            <div class="text-h5 text-bold">Confirmed</div>
            <div class="text-h5">{{ stats.totalConfirmedCases.toLocaleString() }}</div>
            <div class="text-subtitle2">+{{ stats.newlyConfirmedCases.toLocaleString() }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6 col-sm-3">
        <q-card class="bg-warning text-white text-center">
          <q-card-section>
            <q-icon
              name="notifications_active"
              size="2rem"
            />
            <div class="text-h5 text-bold">Active</div>
            <div class="text-h5">{{ stats.totalActive.toLocaleString() }}</div>
            <div class="text-subtitle2">+{{ stats.newActive.toLocaleString() }}</div>
            <div class="text-subtitle2">{{ stats.percentActive }}%</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6 col-sm-3">
        <q-card class="bg-positive text-white text-center">
          <q-card-section>
            <q-icon
              name="check_circle"
              size="2rem"
            />
            <div class="text-h5 text-bold">Recovered</div>
            <div class="text-h5">{{ stats.totalRecoveredCases.toLocaleString() }}</div>
            <div class="text-subtitle2">+{{ stats.newlyRecoveredCases.toLocaleString() }}</div>
            <div class="text-subtitle2">{{ stats.percentRecovered }}%</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6 col-sm-3">
        <q-card class="bg-negative text-white text-center">
          <q-card-section>
            <q-icon
              name="cancel"
              size="2rem"
            />
            <div class="text-h5 text-bold">Deaths</div>
            <div class="text-h5">{{ stats.totalDeaths.toLocaleString() }}</div>
            <div class="text-subtitle">+{{ stats.newDeaths.toLocaleString() }}</div>
            <div class="text-subtitle">{{ stats.percentDeaths }}%</div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Stats } from './models';
import StatCardsSkeleton from './skeletons/StatCardsSkeleton.vue';

const app = namespace('app');

@Component({
  components: {
    StatCardsSkeleton,
  },
})
export default class StatCards extends Vue {
  @Prop({ required: true })
  stats!: Stats;

  @app.State('isLoading')
  isLoading!: boolean;
}
</script>
