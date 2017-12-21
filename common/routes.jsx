import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'containers/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';
import DeputeRanking from 'containers/assemblee/DeputeRanking';

import Depute from 'containers/assemblee/Depute';
import DeputeVotes from 'components/assemblee/depute/DeputeVotes';
import DeputeParticipations from 'components/assemblee/depute/DeputeParticipations';
import DeputeInfos from 'components/assemblee/depute/DeputeInfos';

import Groupe from 'containers/assemblee/Groupe';
import GroupeInfos from 'components/assemblee/groupe/GroupeInfos';
import GroupeVotes from 'components/assemblee/groupe/GroupeVotes';

import AssembleeAbout from 'components/assemblee/about/About';
import AssembleeInfos from 'components/assemblee/about/AboutInformations';
import AssembleeLexicon from 'components/assemblee/about/AboutLexicon';
import AssembleeData from 'components/assemblee/about/AboutData';
import AssembleeLegal from 'components/assemblee/about/AboutLegal';

import NotFound from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/assemblee/deputes/recherche" component={DeputeSearch} />
    <Route path="/assemblee/deputes/classement" component={DeputeRanking} />
    <Route component={Depute}>
      <Redirect from="/assemblee/deputes/:id" to="/assemblee/deputes/:id/votes" />
      <Route path="/assemblee/deputes/:id/votes" component={DeputeVotes} />
      <Route path="/assemblee/deputes/:id/participations" component={DeputeParticipations} />
      <Route path="/assemblee/deputes/:id/informations" component={DeputeInfos} />
    </Route>

    <Route component={Groupe}>
      <Redirect from="/assemblee/groupes/:id" to="/assemblee/groupes/:id/informations" />
      <Route path="/assemblee/groupes/:id/informations" component={GroupeInfos} />
      <Route path="/assemblee/groupes/:id/votes" component={GroupeVotes} />
    </Route>

    <Redirect from="/assemblee/a-propos" to="/assemblee/a-propos/informations" />
    <Route path="/assemblee/a-propos" component={AssembleeAbout}>
      <Route path="/assemblee/a-propos/informations" component={AssembleeInfos} />
      <Route path="/assemblee/a-propos/lexique" component={AssembleeLexicon} />
      <Route path="/assemblee/a-propos/donnees" component={AssembleeData} />
      <Route path="/assemblee/a-propos/mentions-legales" component={AssembleeLegal} />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>
);
