export interface Location {
  long: number;
  lat: number;
  countryOrRegion: string;
  provinceOrState: string;
  county: string;
  isoCode: string;
}

export interface History {
  date: Date;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
}

export interface BreakDown {
  location: Location;
  totalConfirmedCases: number;
  totalRecoveredCases: number;
  totalDeaths: number;
  newlyConfirmedCases: number;
  newlyRecoveredCases: number;
  newDeaths: number;
}

export interface Stats {
  totalConfirmedCases: number;
  totalRecoveredCases: number;
  totalDeaths: number;
  totalActive: number;
  newlyConfirmedCases: number;
  newlyRecoveredCases: number;
  newDeaths: number;
  newActive: number;
  percentRecovered: number;
  percentDeaths: number;
  percentActive: number;
  history: Array<History>;
  breakDowns: Array<BreakDown>;
}

export interface NewsProvider {
  name: string;
  domain: string;
}

export interface NewsImage {
  url: string;
  width: number;
  height: number;
  title: string;
}

export interface NewsItem {
  path: string;
  title: string;
  excerpt: string;
  heat: number;
  tags: Array<string>;
  type: string;
  webUrl: string;
  ampWebUrl: string;
  cdnAmpWebUrl: string;
  publishedDateTime: Date;
  updatedDateTime: null | Date;
  provider: NewsProvider;
  images: Array<NewsImage>;
  locale: string;
  categories: Array<string>;
  topics: Array<string>;
}

export interface News {
  location: Location;
  updatedDateTime: Date;
  news: Array<NewsItem>;
}

export interface Country {
  location: Location;
  updatedAt: Date;
  stats: Stats;
}
