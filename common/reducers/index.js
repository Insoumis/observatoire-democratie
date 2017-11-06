import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as form } from 'redux-form';

import deputes, * as fromDeputes from './deputes';
import deputeSearch, * as fromDeputeSearch from './deputeSearch';

const app = combineReducers({
  deputes,
  deputeSearch,
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
