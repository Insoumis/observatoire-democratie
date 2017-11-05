import { combineReducers } from 'redux';


import { ASSEMBLEE } from 'actions/assemblee';

const deputes = (state = [], action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeSearch}_SUCCESS`:
      if (action.payload.entities.deputes) {
        return Object.keys(action.payload.entities.deputes);
      }

      return [];
    default:
      return state;
  }
};

const pagination = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeSearch}_SUCCESS`: {
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
    case `${ASSEMBLEE.fetchDeputeSearch}_REQUEST`:
      return true;
    case `${ASSEMBLEE.fetchDeputeSearch}_SUCCESS`:
    case `${ASSEMBLEE.fetchDeputeSearch}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeSearch}_REQUEST`:
      return false;
    case `${ASSEMBLEE.fetchDeputeSearch}_FAILURE`:
      return action.payload;
    default:
      return state;
  }
};

const search = (state = null, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeSearch}_SUCCESS`:
      return action.meta.search;
    default:
      return state;
  }
};

export default combineReducers({
  deputes,
  pagination,
  isPending,
  error,
  search,
});

export const getDeputeSearch = state => state;
