import { combineReducers } from 'redux';

import { ASSEMBLEE } from 'actions/assemblee';

const interventions = (state = [], action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeInterventions}_SUCCESS`:
      return action.payload.items;
    default:
      return state;
  }
};

const pagination = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeInterventions}_SUCCESS`: {
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
    case `${ASSEMBLEE.fetchDeputeInterventions}_REQUEST`:
      return true;
    case `${ASSEMBLEE.fetchDeputeInterventions}_SUCCESS`:
    case `${ASSEMBLEE.fetchDeputeInterventions}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeInterventions}_REQUEST`:
      return false;
    case `${ASSEMBLEE.fetchDeputeInterventions}_FAILURE`:
      return action.payload;
    default:
      return state;
  }
};

const search = (state = {}, action) => {
  switch (action.type) {
    case ASSEMBLEE.searchDeputeInterventions:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  interventions,
  pagination,
  isPending,
  error,
  search,
});


export const getDeputeInterventions = state => state;
