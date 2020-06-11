<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CovRT
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <navigation-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <country-search-bar />
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavigationLink from 'components/NavigationLink';
import CountrySearchBar from 'components/CountrySearchBar';

export default {
  name: 'MainLayout',

  components: {
    NavigationLink,
    CountrySearchBar,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Stats',
          caption: 'View stats by country',
          icon: 'bar_chart',
          link: 'app.stats',
        },
        {
          title: 'News',
          caption: 'View breaking news by country',
          icon: 'cast_connected',
          link: 'app.news',
        },
      ],
    };
  },
};
</script>
