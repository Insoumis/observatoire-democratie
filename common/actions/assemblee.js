import { depute } from './schema';

export const ASSEMBLEE = {
  fetchDeputeSearch: 'FETCH_DEPUTE_SEARCH',
  fetchDeputeTop: 'FETCH_DEPUTE_TOP',
  fetchDepute: 'FETCH_DEPUTE',
};

export const fetchDeputeSearch = search => ({
  endpoint: `/api/deputes/liste${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeSearch,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDeputeTop = search => ({
  endpoint: `/api/deputes/tops${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeTop,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDepute = deputeId => ({
  endpoint: `/api/deputes/${deputeId}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDepute,
  schema: depute,
});
