import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { parseHTML } from 'utility';

import List from 'components/reusable/List';

import Form from './GroupeInterventionsForm';

import css from './GroupeInterventions.scss';

const GroupeInterventions = ({ groupeInterventions, fetchInterventions, router }) => (
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
      error={groupeInterventions.error}
      isPending={groupeInterventions.isPending}
      list={
        <ul>
          {groupeInterventions.interventions.map(itv => (
            <li key={itv.itv_id}>
              <h3><span>{itv.itv_ctx[1]} ({itv.itv_ctx[0]})</span></h3>
              <h4>
                {itv.itv_ctx[2]}
                {itv.itv_ctx[3] && ` - ${itv.itv_ctx[3]}`}
                {itv.itv_ctx[4] && ` - ${itv.itv_ctx[4]}`}
              </h4>
              <h5>
                <Link to={`/assemblee/deputes/${itv.depute_shortid}/participations`}>
                  <i className="fa fa-user-circle-o fa-fw" /> {itv.depute_nom}
                </Link>
              </h5>
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
      pagination={groupeInterventions.pagination}
      refetch={fetchInterventions}
    />
  </div>
);

GroupeInterventions.propTypes = {
  groupeInterventions: PropTypes.shape({}).isRequired,
  fetchInterventions: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default GroupeInterventions;
