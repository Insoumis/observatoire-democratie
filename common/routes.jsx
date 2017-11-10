import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';
import DeputeRanking from 'containers/assemblee/DeputeRanking';

import Depute from 'containers/assemblee/Depute';
import DeputeVotes from 'components/assemblee/depute/DeputeVotes';
import DeputeInfos from 'components/assemblee/depute/DeputeInfos';

import GroupeList from 'containers/assemblee/GroupeList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/assemblee/deputes/recherche" component={DeputeSearch} />
    <Route path="/assemblee/deputes/classement" component={DeputeRanking} />
    <Route component={Depute}>
      <Redirect from="/assemblee/deputes/:id" to="/assemblee/deputes/:id/votes" />
      <Route path="/assemblee/deputes/:id/votes" component={DeputeVotes} />
      <Route path="/assemblee/deputes/:id/informations" component={DeputeInfos} />
    </Route>

    <Route path="/assemblee/groupes" component={GroupeList} />
  </Route>
);
