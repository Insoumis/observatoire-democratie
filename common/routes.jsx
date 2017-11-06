import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';
import DeputeTop from 'containers/assemblee/DeputeTop';
import Depute from 'containers/assemblee/Depute';

import GroupeList from 'containers/assemblee/GroupeList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/assemblee/deputes/search" component={DeputeSearch} />
    <Route path="/assemblee/deputes/top" component={DeputeTop} />
    <Route path="/assemblee/deputes/:id" component={Depute} />

    <Route path="/assemblee/groupes" component={GroupeList} />
  </Route>
);
