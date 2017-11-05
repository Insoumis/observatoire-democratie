import fetch from 'isomorphic-fetch';
import uuid from 'uuid';
import { normalize } from 'normalizr';

export default ({ dispatch }) => next => (action) => {
  if (!action.endpoint) {
    return next(action);
  }

  dispatch({
    type: `${action.type}_REQUEST`,
    meta: action.meta,
  });

  const checkStatus = (response) => {
    if (response.ok) {
      return response.text().then(text => (text ? JSON.parse(text) : {}));
    }

    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  };

  const api = 'http://observatoire-assemblee.orvdev.fr';

  return fetch(api + action.endpoint, {
    method: 'get',
  })
    .then(checkStatus)
    .then((response) => {
      // Uncomment to test errors
      // if (action.type === 'actionType') {
      //   const error = new Error('response.statusText');
      //   error.status = 500;
      //   throw error;
      // } else {

      dispatch({
        type: `${action.type}_SUCCESS`,
        payload: (action.schema) ? normalize(response, action.schema) : response,
        meta: action.meta,
      });

      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      dispatch({
        type: `${action.type}_FAILURE`,
        payload: { ...error, id: uuid.v4() },
        meta: action.meta,
      });

      return error;
    });
};
