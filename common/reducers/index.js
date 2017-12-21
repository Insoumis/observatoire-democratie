import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as form } from 'redux-form';

import home, * as fromHome from './home';
import deputes, * as fromDeputes from './deputes';
import deputeSearch, * as fromDeputeSearch from './deputeSearch';
import deputeRanking, * as fromDeputeRanking from './deputeRanking';
import deputeVotes, * as fromDeputeVotes from './deputeVotes';
import deputeInterventions, * as fromDeputeInterventions from './deputeInterventions';
import groupes, * as fromGroupes from './groupes';
import groupeRanking, * as fromGroupeRanking from './groupeRanking';

const app = combineReducers({
  home,
  deputes,
  deputeSearch,
  deputeRanking,
  deputeVotes,
  deputeInterventions,
  groupes,
  groupeRanking,
  form,
});

export default app;


export const getHome = state => fromHome.getHome(state.home);

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

export const getDeputeVotes = state => fromDeputeVotes.getDeputeVotes(state.deputeVotes);

export const getDeputeInterventions = state =>
  fromDeputeInterventions.getDeputeInterventions(state.deputeInterventions);


const getAllGroupes = state => fromGroupes.getGroupes(state.groupes);

export const getGroupe = (state, groupeId) => getAllGroupes(state)[groupeId];

export const getGroupeRanking = createSelector(
  state => fromGroupeRanking.getGroupeRanking(state.groupeRanking),
  state => getAllGroupes(state),
  (groupeRankingState, allGroupes) => ({
    ...groupeRankingState,
    groupes: groupeRankingState.groupes.map(id => allGroupes[id]),
  }),
);
