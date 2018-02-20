import React from 'react';
import PropTypes from 'prop-types';

import { amendementsSort, documentsTypes, formatDate, questionsTypes, worksTypes } from 'utility';

import List from 'components/reusable/List';
import Form from './DeputeWorksForm';

import css from './DeputeWorks.scss';

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
            <i className="fa fa-question fa-fw" /> {work.sort}
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

  return '';
};

const getDocumentsType = (value) => {
  if (documentsTypes.filter(type => type.value === value).length) {
    return value;
  }

  return 'document';
};

const getQuestionsType = (value) => {
  if (questionsTypes.filter(type => type.value === value).length) {
    return value;
  }

  return 'question';
};

const DeputeWorks = ({ fetchWorks, deputeWorks, router }) => (
  <div className={css.module}>
    <h2>Ses travaux</h2>

    <Form
      initialValues={{
        ...router.location.query,
        type: getWorksType(router.location.query.type),
        documentType: getDocumentsType(router.location.query.type),
        questionType: getQuestionsType(router.location.query.type),
        sort: router.location.query.sort || amendementsSort[0].value,
      }}
      router={router}
    />

    <List
      baseLink={router.location.pathname}
      error={deputeWorks.error}
      isPending={deputeWorks.isPending}
      list={
        deputeWorks.works.map(work => (
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
      pagination={deputeWorks.pagination}
      refetch={fetchWorks}
    />
  </div>
);

DeputeWorks.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  deputeWorks: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default DeputeWorks;
