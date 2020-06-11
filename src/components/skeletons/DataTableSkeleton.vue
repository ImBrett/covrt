<template>
  <q-markup-table>
    <thead>
      <tr>
        <th class="text-left">
          <q-skeleton
            animation="blink"
            type="text"
          />
        </th>
        <th class="text-right">
          <q-skeleton
            animation="blink"
            type="text"
          />
        </th>
        <th class="text-right">
          <q-skeleton
            animation="blink"
            type="text"
          />
        </th>
        <th class="text-right">
          <q-skeleton
            animation="blink"
            type="text"
          />
        </th>
        <th class="text-right">
          <q-skeleton
            animation="blink"
            type="text"
          />
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="n in 5"
        :key="n"
      >
        <td class="text-left">
          <q-skeleton
            animation="blink"
            type="text"
            width="85px"
          />
        </td>
        <td align="right">
          <q-skeleton
            animation="blink"
            type="text"
            width="85px"
          />
        </td>
        <td align="right">
          <q-skeleton
            animation="blink"
            type="text"
            width="85px"
          />
        </td>
        <td align="right">
          <q-skeleton
            animation="blink"
            type="text"
            width="85px"
          />
        </td>
        <td align="right">
          <q-skeleton
            animation="blink"
            type="text"
            width="85px"
          />
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DataTableSkeleton extends Vue { }
</script>
