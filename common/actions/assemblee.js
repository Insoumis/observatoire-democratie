import { depute, groupe } from './schema';

export const ASSEMBLEE = {
  fetchDeputeRandom: 'FETCH_DEPUTE_RANDOM',
  fetchKeyVotes: 'FETCH_KEY_VOTES',
  fetchLastIntervention: 'FETCH_LAST_INTERVENTION',
  fetchDeputeSearch: 'FETCH_DEPUTE_SEARCH',
  fetchDeputeRanking: 'FETCH_DEPUTE_RANKING',
  fetchDepute: 'FETCH_DEPUTE',
  fetchDeputeVotes: 'FETCH_DEPUTE_VOTES',
  fetchDeputeWorks: 'FETCH_DEPUTE_WORKS',
  fetchDeputeInterventions: 'FETCH_DEPUTE_INTERVENTIONS',
  fetchGroupeRanking: 'FETCH_GROUPE_RANKING',
  fetchGroupe: 'FETCH_GROUPE',
  fetchGroupeWorks: 'FETCH_GROUPE_WORKS',
  fetchGroupeInterventions: 'FETCH_GROUPE_INTERVENTIONS',
};


export const fetchDeputeRandom = () => ({
  endpoint: '/deputes/hasard',
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeRandom,
});

export const fetchKeyVotes = () => ({
  endpoint: '/scrutins/cles?nb=2',
  api: 'assemblee',
  type: ASSEMBLEE.fetchKeyVotes,
});

export const fetchLastIntervention = () => ({
  endpoint: '/interventions/derniere',
  api: 'assemblee',
  type: ASSEMBLEE.fetchLastIntervention,
});

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

export const fetchVotes = search => ({
  endpoint: `/votes${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeVotes,
  meta: { search },
});

export const fetchGroupeRanking = search => ({
  endpoint: `/groupes/top${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchGroupeRanking,
  schema: { items: [groupe] },
  meta: { search },
});

export const fetchGroupe = groupId => ({
  endpoint: `/groupes/${groupId}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchGroupe,
  schema: groupe,
});

export const fetchWorks = search => ({
  endpoint: `/travaux${search}`,
  api: 'assemblee',
  type: (search.match('depute')) ? ASSEMBLEE.fetchDeputeWorks : ASSEMBLEE.fetchGroupeWorks,
  meta: { search },
});

export const fetchInterventions = search => ({
  endpoint: `/interventions${search}`,
  api: 'assemblee',
  type: (search.match('depute')) ? ASSEMBLEE.fetchDeputeInterventions : ASSEMBLEE.fetchGroupeInterventions,
  meta: { search },
});
