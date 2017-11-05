import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/assemblee/deputes/search" component={DeputeSearch} />
  </Route>
);
