import React from 'react';
import PropTypes from 'prop-types';

import { amendementsSort, documentsTypes, formatDate, questionsTypes, worksTypes } from 'utility';

import List from 'components/reusable/List';
import Form from './GroupeWorksForm';

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
    case 'Retiré':
    case 'Non soutenu':
    case 'Tombé':
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

const getWorksType = (value) => {
  if (worksTypes.filter(type => type.value === value).length) {
    return value;
  } else if (documentsTypes.filter(type => type.value === value).length) {
    return 'document';
  } else if (questionsTypes.filter(type => type.value === value).length) {
    return 'question';
  }

  return undefined;
};

const GroupeWorks = ({ fetchWorks, groupeWorks, router }) => (
  <div className={css.module}>
    <h2>Les travaux</h2>

    <Form
      initialValues={{
        ...router.location.query,
        type: getWorksType(router.location.query.type) || worksTypes[0].value,
        documentType: router.location.query.type || documentsTypes[0].value,
        questionType: router.location.query.type || questionsTypes[0].value,
        sort: router.location.query.sort || amendementsSort[0].value,
      }}
      router={router}
    />

    <List
      baseLink={router.location.pathname}
      error={groupeWorks.error}
      isPending={groupeWorks.isPending}
      list={
        groupeWorks.works.map(work => (
          <article key={work.id}>
            <h4><span>{work.auteurs_noms.join(', ')}</span></h4>
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
