<template>
  <div class="q-pa-md">
    <news-articles-skeleton v-if="isLoading" />
    <div
      class="row q-col-gutter-md"
      v-else
    >
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="article in news"
        :key="article.path"
      >
        <q-card>
          <q-img
            v-if="article.images"
            :src="article.images[0].url"
          />
          <q-skeleton
            v-else
            height="200px"
            square
          />
          <q-card-section>
            <q-badge
              dense
              v-for="(tag, i) in article.tags"
              :key="i"
              color="accent"
            >{{ tag }}
            </q-badge>
            <a :href="article.webUrl">
              <div class="text-h5 q-mt-sm q-mb-xs text-light">{{ article.title }}</div>
            </a>
            <div class="text-caption text-grey">{{ article.excerpt }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { NewsItem } from './models';
import NewsArticlesSkeleton from './skeletons/NewsArticlesSkeleton.vue';

const app = namespace('app');

@Component({
  components: {
    NewsArticlesSkeleton,
  },
})
export default class NewsArticles extends Vue {
  expanded = false;

  @Prop({ required: true })
  news!: Array<NewsItem>;

  @app.State('isLoading')
  isLoading!: boolean;
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  color: #fff;
}
</style>
