<template>
  <div class="row q-col-gutter-md">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3"
      v-for="n in 30"
      :key="n"
    >
      <q-card>
        <q-skeleton
          height="150px"
          square
        />

        <q-card-section>
          <q-skeleton
            height="15px"
            width="30px"
          />
          <q-skeleton
            type="text"
            class="text-h5 q-mt-sm q-mb-xs"
          />
          <q-skeleton
            type="text"
            class="text-h5 q-mt-sm q-mb-xs"
          />
          <q-skeleton
            type="text"
            class="text-caption"
          />
          <q-skeleton
            type="text"
            class="text-caption"
          />
          <q-skeleton
            type="text"
            class="text-caption"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NewsArticlesSkeleton extends Vue {}
</script>

<style lang="scss" scoped>
a {
  text-transform: none;
}
</style>
