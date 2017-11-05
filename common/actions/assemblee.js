import { depute } from './schema';

export const ASSEMBLEE = {
  fetchDeputeSearch: 'FETCH_DEPUTE_SEARCH',
};

export const fetchDeputeSearch = search => ({
  endpoint: `/api/deputes/liste${search}`,
  api: 'assemblee',
  type: ASSEMBLEE.fetchDeputeSearch,
  schema: { items: [depute] },
  meta: { search },
});
