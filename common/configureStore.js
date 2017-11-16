import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'reducers';
import apiMiddleware from './apiMiddleware';

export default (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(apiMiddleware),
    ),
  );

  return store;
};
