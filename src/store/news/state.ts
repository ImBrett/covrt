import { NewsItem } from 'components/models';

export interface NewsStateInterface {
  news: Array<NewsItem>;
}

export const NewsState = (): NewsStateInterface => ({
  news: [],
});
