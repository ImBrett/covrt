<template>
  <q-skeleton
    height="360px"
    square
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TimeSeriesChartSkeleton extends Vue {}
</script>
