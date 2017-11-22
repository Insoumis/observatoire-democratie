import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import DeputeRandom from 'components/assemblee/depute/DeputeRandom';
import KeyVoteList from 'components/assemblee/keyVoteList/KeyVoteList';
import DeputeLastIntervention from 'components/assemblee/depute/DeputeLastIntervention';

import illustration from './assets/illu-home.png';
import css from './Home.scss';

const Home = ({ home, refetchDepute, refetchKeyVotes, refetchLastIntervention }) => (
  <div className={`container ${css.module}`}>
    <section className={css.presentation}>
      <img src={illustration} alt="Qu'est-ce que l'Observatoire de la Démocratie ?" />
      <div>
        <h1>L&apos;Observatoire de la <strong>Démocratie</strong> ?</h1>
        <p>
          L&apos;Observatoire de la Démocratie est <strong>une initiative citoyenne</strong>.
          Ce site présente et met en forme
          les <strong>données publiques de l&apos;Assemblée nationale</strong> de la
          République Française.
          <br />
          L&apos;objectif de cet outil est de permettre à chacun·e
          de <strong>trouver facilement des informations pertinentes</strong> -&nbsp;bien
          que non-exhaustives&nbsp;- à propos des député·e·s siégeant à l&apos;Assemblée.
        </p>
        <p>
          Il sera rapidement enrichi avec de nouvelles données et d&apos;autres initiatives
          concernant divers secteurs de la vie démocratique seront également ajoutées
          dans les mois à venir.
          <br />
          Pour suivre ces évolutions, n&apos;hésitez donc pas à{' '}
          <a href="https://twitter.com/Obs_Democratie" rel="noopener noreferrer" target="_blank">
            nous suivre sur Twitter
          </a>
          {' '}<i className="fa fa-smile-o" />.
        </p>
        <p>
          <i className="fa fa-arrow-circle-o-right" /> <Link to="/assemblee/a-propos">En savoir plus ?</Link>
        </p>
      </div>
    </section>
    <div className={css.main}>
      <section>
        <h1>Un·e <strong>député·e</strong> au hasard</h1>
        <DeputeRandom
          depute={home.depute}
          refetch={refetchDepute}
        />
      </section>
      <section>
        <h1>Les derniers <strong>votes</strong> clés</h1>
        <KeyVoteList
          keyVotes={home.keyVotes}
          refetch={refetchKeyVotes}
        />
      </section>
      <section>
        <h1>La dernière <strong>intervention</strong></h1>
        <DeputeLastIntervention
          intervention={home.lastIntervention}
          refetch={refetchLastIntervention}
        />
      </section>
    </div>
  </div>
);

Home.propTypes = {
  home: PropTypes.shape({
    depute: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    keyVotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  }).isRequired,
  refetchDepute: PropTypes.func.isRequired,
  refetchKeyVotes: PropTypes.func.isRequired,
  refetchLastIntervention: PropTypes.func.isRequired,
};

export default Home;
