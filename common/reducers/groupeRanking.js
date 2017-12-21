import { combineReducers } from 'redux';


import { ASSEMBLEE } from 'actions/assemblee';

const groupes = (state = [], action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupeRanking}_SUCCESS`:
      if (action.payload.entities.groupes) {
        return Object.keys(action.payload.entities.groupes);
      }

      return [];
    default:
      return state;
  }
};

const pagination = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupeRanking}_SUCCESS`: {
      const { result } = action.payload;
      return {
        currentPage: result.currentpage,
        totalItems: result.totalitems,
        nbrPages: result.nbpages,
      };
    }
    default:
      return state;
  }
};

const isPending = (state = true, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupeRanking}_REQUEST`:
      return true;
    case `${ASSEMBLEE.fetchGroupeRanking}_SUCCESS`:
    case `${ASSEMBLEE.fetchGroupeRanking}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupeRanking}_REQUEST`:
      return false;
    case `${ASSEMBLEE.fetchGroupeRanking}_FAILURE`:
      return action.payload;
    default:
      return state;
  }
};

const search = (state = null, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupeRanking}_SUCCESS`:
      return action.meta.search;
    default:
      return state;
  }
};

export default combineReducers({
  groupes,
  pagination,
  isPending,
  error,
  search,
});

export const getGroupeRanking = state => state;
