import { depute } from './schema';

export const ASSEMBLEE = {
  fetchDeputeSearch: 'FETCH_DEPUTE_SEARCH',
  fetchDeputeRanking: 'FETCH_DEPUTE_RANKING',
  fetchDepute: 'FETCH_DEPUTE',
};

export const fetchDeputeSearch = search => ({
  endpoint: `/api/deputes/liste${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeSearch,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDeputeRanking = search => ({
  endpoint: `/api/deputes/top${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeRanking,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDepute = deputeId => ({
  endpoint: `/api/deputes/${deputeId}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDepute,
  schema: depute,
});
