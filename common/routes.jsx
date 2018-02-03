import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'containers/Home';

import DeputeSearch from 'containers/assemblee/DeputeSearch';
import DeputeRanking from 'containers/assemblee/DeputeRanking';

import Depute from 'containers/assemblee/Depute';

import DeputeVotes from 'components/assemblee/depute/DeputeVotes';
import DeputeVotesOverview from 'components/assemblee/depute/DeputeVotesOverview';
import DeputeKeyVotes from 'components/assemblee/depute/DeputeKeyVotes';
import DeputeVoteSearch from 'containers/assemblee/DeputeVoteSearch';

import DeputeParticipations from 'components/assemblee/depute/DeputeParticipations';
import DeputeParticipationsOverview from 'components/assemblee/depute/DeputeParticipationsOverview';
import DeputeWorks from 'containers/assemblee/DeputeWorks';
import DeputeInterventions from 'containers/assemblee/DeputeInterventions';

import DeputeInfos from 'components/assemblee/depute/DeputeInfos';

import GroupeRanking from 'containers/assemblee/GroupeRanking';

import Groupe from 'containers/assemblee/Groupe';
import GroupeVotes from 'components/assemblee/groupe/GroupeVotes';

import GroupeParticipations from 'components/assemblee/groupe/GroupeParticipations';
import GroupeParticipationsOverview from 'components/assemblee/groupe/GroupeParticipationsOverview';
import GroupeWorks from 'containers/assemblee/GroupeWorks';
import GroupeInterventions from 'containers/assemblee/GroupeInterventions';

import GroupeInfos from 'components/assemblee/groupe/GroupeInfos';

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
      <Route path="/assemblee/deputes/:id/votes" component={DeputeVotes}>
        <IndexRoute component={DeputeVotesOverview} />
        <Route path="/assemblee/deputes/:id/votes/votes-cles" component={DeputeKeyVotes} />
        <Route path="/assemblee/deputes/:id/votes/votes-liste" component={DeputeVoteSearch} />
      </Route>
      <Route path="/assemblee/deputes/:id/participations" component={DeputeParticipations}>
        <IndexRoute component={DeputeParticipationsOverview} />
        <Route path="/assemblee/deputes/:id/participations/travaux" component={DeputeWorks} />
        <Route path="/assemblee/deputes/:id/participations/interventions" component={DeputeInterventions} />
      </Route>
      <Route path="/assemblee/deputes/:id/informations" component={DeputeInfos} />
    </Route>

    <Route path="/assemblee/groupes" component={GroupeRanking} />
    <Route component={Groupe}>
      <Redirect from="/assemblee/groupes/:id" to="/assemblee/groupes/:id/votes" />
      <Route path="/assemblee/groupes/:id/votes" component={GroupeVotes} />
      <Route path="/assemblee/groupes/:id/participations" component={GroupeParticipations}>
        <IndexRoute component={GroupeParticipationsOverview} />
        <Route path="/assemblee/groupes/:id/participations/travaux" component={GroupeWorks} />
        <Route path="/assemblee/groupes/:id/participations/interventions" component={GroupeInterventions} />
      </Route>

      <Route path="/assemblee/groupes/:id/informations" component={GroupeInfos} />
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
