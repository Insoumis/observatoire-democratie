import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';
import DeputeRanking from 'containers/assemblee/DeputeRanking';
import Depute from 'containers/assemblee/Depute';
import DeputeAbout from 'components/assemblee/depute/DeputeAbout';

import GroupeList from 'containers/assemblee/GroupeList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/assemblee/deputes/search" component={DeputeSearch} />
    <Route path="/assemblee/deputes/ranking" component={DeputeRanking} />
    <Route component={Depute}>
      <Redirect from="/assemblee/deputes/:id" to="/assemblee/deputes/:id/about" />
      <Route path="/assemblee/deputes/:id/about" component={DeputeAbout} />
    </Route>

    <Route path="/assemblee/groupes" component={GroupeList} />
  </Route>
);
