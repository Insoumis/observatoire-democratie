import { ASSEMBLEE } from 'actions/assemblee';

const deputes = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchDeputeSearch}_SUCCESS`:
    case `${ASSEMBLEE.fetchDeputeRanking}_SUCCESS`:
    case `${ASSEMBLEE.fetchDepute}_SUCCESS`:
      return { ...state, ...action.payload.entities.deputes };
    default:
      return state;
  }
};

export default deputes;


export const getDeputes = state => state;
