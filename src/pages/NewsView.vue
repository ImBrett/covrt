<template>
  <q-page>
    <news-articles :news="news" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { NewsItem } from 'components/models';
import NewsArticles from 'components/NewsArticles.vue';

const news = namespace('news');

@Component({
  components: {
    NewsArticles,
  },
})
export default class NewsView extends Vue {
  @news.State('news')
  news!: Array<NewsItem>;

  @news.Action('fetchNews')
  fetchNews!: (country: { value: string; label: string }) => Promise<void>;

  async created() {
    await this.fetchNews({ value: 'global', label: 'Global ' });
  }
}
</script>
