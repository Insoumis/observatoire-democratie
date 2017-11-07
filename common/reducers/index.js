import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as form } from 'redux-form';

import deputes, * as fromDeputes from './deputes';
import deputeSearch, * as fromDeputeSearch from './deputeSearch';
import deputeRanking, * as fromDeputeRanking from './deputeRanking';

const app = combineReducers({
  deputes,
  deputeSearch,
  deputeRanking,
  form,
});

export default app;


const getAllDeputes = state => fromDeputes.getDeputes(state.deputes);

export const getDepute = (state, deputeId) => getAllDeputes(state)[deputeId];

export const getDeputeSearch = createSelector(
  state => fromDeputeSearch.getDeputeSearch(state.deputeSearch),
  state => getAllDeputes(state),
  (deputeSearchState, allDeputes) => ({
    ...deputeSearchState,
    deputes: deputeSearchState.deputes.map(id => allDeputes[id]),
  }),
);

export const getDeputeRanking = createSelector(
  state => fromDeputeRanking.getDeputeRanking(state.deputeRanking),
  state => getAllDeputes(state),
  (deputeRankingState, allDeputes) => ({
    ...deputeRankingState,
    deputes: deputeRankingState.deputes.map(id => allDeputes[id]),
  }),
);