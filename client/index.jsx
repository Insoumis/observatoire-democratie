import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';

import configureStore from '../common/configureStore';
import Root from './Root';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
