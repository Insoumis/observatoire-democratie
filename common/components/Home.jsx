import React from 'react';
import PropTypes from 'prop-types';

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus
          amet magnam sint tempora corporis distinctio? Ipsa ipsam numquam magnam
          maiores praesentium autem. Alias sed hic nesciunt asperiores possimus neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi!
          Voluptatum minus, explicabo excepturi nulla ex tempore laborum voluptas
          sint maiores optio, natus temporibus fugiat fugit ad laudantium est alias.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          non, voluptatibus excepturi soluta cupiditate tempora reiciendis quidem
          ullam nihil voluptas quae dolorum officia est inventore. Fuga quos nobis ullam praesentium.
        </p>
      </div>
    </section>
    <div className={css.main}>
      <section>
        <h1>Un·e député·e au hasard</h1>
        <DeputeRandom
          depute={home.depute}
          refetch={refetchDepute}
        />
      </section>
      <section>
        <h1>Les derniers votes clés</h1>
        <KeyVoteList
          keyVotes={home.keyVotes}
          refetch={refetchKeyVotes}
        />
      </section>
      <section>
        <h1>La dernière intervention</h1>
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
