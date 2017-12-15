import { ASSEMBLEE } from 'actions/assemblee';

const groupes = (state = {}, action) => {
  switch (action.type) {
    case `${ASSEMBLEE.fetchGroupe}_SUCCESS`:
      return { ...state, ...action.payload.entities.groupes };
    default:
      return state;
  }
};

export default groupes;


export const getGroupes = state => state;
