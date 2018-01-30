import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utility';

import List from 'components/reusable/List';

import css from './GroupeWorks.scss';

const getResult = (work) => {
  switch (work.sort) {
    case 'Adopté':
      return (
        <div>
          <span className={css.pour}>
            <i className="fa fa-check fa-fw" /> Adopté
          </span>
          {work.type_libelle} du {formatDate(work.date.$date)}
        </div>
      );
    case 'Rejeté':
      return (
        <div>
          <span className={css.contre}>
            <i className="fa fa-times fa-fw" /> Rejeté
          </span>
          {work.type_libelle} du {formatDate(work.date.$date)}
        </div>
      );
    case 'Non renseigné':
      return (
        <div>
          <span className={css.pending}>
            <i className="fa fa-question fa-fw" /> Non renseigné
          </span>
          {work.type_libelle} du {formatDate(work.date.$date)}
        </div>
      );
    default:
      return (
        <div>
          {work.type_libelle} du {formatDate(work.date.$date)}
        </div>
      );
  }
};

const GroupeWorks = ({ fetchWorks, groupeWorks, router }) => (
  <div className={css.module}>
    <h2>Les travaux</h2>

    <List
      baseLink={router.location.pathname}
      error={groupeWorks.error}
      isPending={groupeWorks.isPending}
      list={
        groupeWorks.works.map(work => (
          <article key={work.id}>
            <h3>
              {work.dossier}
            </h3>
            {getResult(work)}
            <p>
              {work.description}<br />
              <i className="fa fa-arrow-circle-o-right" />{' '}
              <a href={work.lien} target="_blank">Voir la source</a>
            </p>
          </article>
        ))
      }
      pagination={groupeWorks.pagination}
      refetch={fetchWorks}
    />
  </div>
);

GroupeWorks.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  groupeWorks: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default GroupeWorks;
