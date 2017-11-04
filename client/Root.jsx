import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from '../common/routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func,
    getState: PropTypes.func,
  }).isRequired,
};

export default Root;
