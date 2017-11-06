import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as form } from 'redux-form';

import deputes, * as fromDeputes from './deputes';
import deputeSearch, * as fromDeputeSearch from './deputeSearch';
import deputeTop, * as fromDeputeTop from './deputeTop';

const app = combineReducers({
  deputes,
  deputeSearch,
  deputeTop,
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

export const getDeputeTop = createSelector(
  state => fromDeputeTop.getDeputeTop(state.deputeTop),
  state => getAllDeputes(state),
  (deputeTopState, allDeputes) => ({
    ...deputeTopState,
    deputes: deputeTopState.deputes.map(id => allDeputes[id]),
  }),
);
