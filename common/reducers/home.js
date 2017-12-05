import { combineReducers } from 'redux';

import { ASSEMBLEE } from 'actions/assemblee';

const depute = (state = null, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeRandom}_REQUEST`:
      return null;
    case `${ASSEMBLEE.fetchDeputeRandom}_SUCCESS`:
      return action.payload;
    case `${ASSEMBLEE.fetchDeputeRandom}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const keyVotes = (state = null, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchKeyVotes}_REQUEST`:
      return null;
    case `${ASSEMBLEE.fetchKeyVotes}_SUCCESS`:
      return action.payload;
    case `${ASSEMBLEE.fetchKeyVotes}_FAILURE`:
      return false;
    default:
      return state;
  }
};

const lastIntervention = (state = null, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchLastIntervention}_REQUEST`:
      return null;
    case `${ASSEMBLEE.fetchLastIntervention}_SUCCESS`:
      return action.payload[0];
    case `${ASSEMBLEE.fetchLastIntervention}_FAILURE`:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  depute,
  keyVotes,
  lastIntervention,
});


export const getHome = state => state;
