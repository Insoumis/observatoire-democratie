import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'reducers';
import apiMiddleware from './apiMiddleware';

export default () => {
  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(apiMiddleware),
    ),
  );

  return store;
};
