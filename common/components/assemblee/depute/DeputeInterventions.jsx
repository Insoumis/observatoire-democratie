import React from 'react';
import PropTypes from 'prop-types';

import { parseHTML } from 'utility';

import List from 'components/reusable/List';

import Form from './DeputeInterventionsForm';

import css from './DeputeInterventions.scss';

const DeputeInterventions = ({ deputeInterventions, fetchInterventions, router }) => (
  <div className={css.module}>
    <h2>Ses interventions</h2>
    <Form
      router={router}
      initialValues={{
        requete: router.location.query.requete,
      }}
    />

    <List
      baseLink={router.location.pathname}
      error={deputeInterventions.error}
      isPending={deputeInterventions.isPending}
      list={
        <ul>
          {deputeInterventions.interventions.map(itv => (
            <li key={itv.itv_id}>
              <h3><span>{itv.itv_ctx[1]} ({itv.itv_ctx[0]})</span></h3>
              <h4>
                {itv.itv_ctx[2]}
                {itv.itv_ctx[3] && ` - ${itv.itv_ctx[3]}`}
                {itv.itv_ctx[4] && ` - ${itv.itv_ctx[4]}`}
              </h4>
              <blockquote>
                {parseHTML(itv.itv_contenu)}
              </blockquote>
              <div>
                <i className="fa fa-arrow-circle-o-right" />{' '}
                <a href={itv.itv_url} target="_blank">Voir l&apos;intervention</a>
              </div>
            </li>
          ))}
        </ul>
      }
      pagination={deputeInterventions.pagination}
      refetch={fetchInterventions}
    />
  </div>
);

DeputeInterventions.propTypes = {
  deputeInterventions: PropTypes.shape({}).isRequired,
  fetchInterventions: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default DeputeInterventions;
