<template>
  <div class="row q-col-gutter-md">

    <div
      class="col-6 col-sm-3"
      v-for="i in 4"
      :key="i"
    >
      <q-card align="center">
        <q-card-section>
          <q-skeleton
            type="QAvatar"
            height="2rem"
            width="2rem"
          />
          <q-skeleton
            type="text"
            height="3rem"
            width="66%"
          />
          <q-skeleton
            type="text"
            height="2.8rem"
            width="75%"
          />
          <q-skeleton
            type="text"
            height="1.6rem"
            width="12.5%"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class StatCardsSkeleton extends Vue {}
</script>
