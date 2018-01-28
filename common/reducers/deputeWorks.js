import { combineReducers } from 'redux';

import { ASSEMBLEE } from 'actions/assemblee';

const works = (state = [], action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeWorks}_SUCCESS`:
      return action.payload.items;
    default:
      return state;
  }
};

const pagination = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeWorks}_SUCCESS`: {
      const result = action.payload;
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
    case `${ASSEMBLEE.fetchDeputeWorks}_REQUEST`:
      return true;
    case `${ASSEMBLEE.fetchDeputeWorks}_SUCCESS`:
    case `${ASSEMBLEE.fetchDeputeWorks}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeWorks}_REQUEST`:
      return false;
    case `${ASSEMBLEE.fetchDeputeWorks}_FAILURE`:
      return action.payload;
    default:
      return state;
  }
};

const search = (state = '', action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeWorks}_SUCCESS`:
      return action.meta.search;
    default:
      return state;
  }
};

export default combineReducers({
  works,
  pagination,
  isPending,
  error,
  search,
});


export const getDeputeWorks = state => state;
