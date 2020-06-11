import { Stats } from 'components/models';

export interface StatsStateInterface {
  stats: Stats;
}

export const StatsState = (): StatsStateInterface => ({
  stats: {
    totalConfirmedCases: 0,
    totalRecoveredCases: 0,
    totalDeaths: 0,
    totalActive: 0,
    newlyConfirmedCases: 0,
    newlyRecoveredCases: 0,
    newDeaths: 0,
    newActive: 0,
    percentRecovered: 0,
    percentDeaths: 0,
    percentActive: 0,
    history: [],
    breakDowns: [],
  },
});
