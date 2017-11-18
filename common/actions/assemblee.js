import { depute } from './schema';

export const ASSEMBLEE = {
  fetchDeputeSearch: 'FETCH_DEPUTE_SEARCH',
  fetchDeputeRanking: 'FETCH_DEPUTE_RANKING',
  fetchDepute: 'FETCH_DEPUTE',
  searchDeputeVotes: 'SEARCH_DEPUTE_VOTES',
  fetchDeputeVotes: 'FETCH_DEPUTE_VOTES',
  searchDeputeInterventions: 'SEARCH_DEPUTE_INTERVENTIONS',
  fetchDeputeInterventions: 'FETCH_DEPUTE_INTERVENTIONS',
};

export const fetchDeputeSearch = search => ({
  endpoint: `/deputes/liste${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeSearch,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDeputeRanking = search => ({
  endpoint: `/deputes/top${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeRanking,
  schema: { items: [depute] },
  meta: { search },
});

export const fetchDepute = deputeId => ({
  endpoint: `/deputes/${deputeId}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDepute,
  schema: depute,
});

export const searchDeputeVotes = search => ({
  type: ASSEMBLEE.searchDeputeVotes,
  payload: search,
});

export const fetchDeputeVotes = search => ({
  endpoint: `/votes${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeVotes,
});

export const searchDeputeInterventions = search => ({
  type: ASSEMBLEE.searchDeputeInterventions,
  payload: search,
});

export const fetchDeputeInterventions = search => ({
  endpoint: `/interventions${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeInterventions,
});

