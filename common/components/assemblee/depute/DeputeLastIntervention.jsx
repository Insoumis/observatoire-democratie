import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { parseHTML } from 'utility';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';

import css from './DeputeLastIntervention.scss';

const DeputeLastIntervention = ({ intervention, refetch }) => {
  if (intervention === null) {
    return (
      <div className={css.whiteBlock}>
        <Spinner />
      </div>
    );
  }

  if (intervention === false) {
    return (
      <div className={css.retry}>
        <RequestError retry={refetch} />
      </div>
    );
  }

  return (
    <div className={css.module}>
      <h2><span>{intervention.itv_ctx[1]} ({intervention.itv_ctx[0]})</span></h2>
      <h3>
        {intervention.itv_ctx[2]}
        {intervention.itv_ctx[3] && ` - ${intervention.itv_ctx[3]}`}
        {intervention.itv_ctx[4] && ` - ${intervention.itv_ctx[4]}`}
      </h3>
      <h4>
        <Link to={`/assemblee/deputes/${intervention.depute_shortid}/participations`}>
          <i className="fa fa-user-circle-o" /> {intervention.depute_nom} ({intervention.groupe_abrev})
        </Link>
      </h4>
      <blockquote>
        {parseHTML(intervention.itv_contenu)}
      </blockquote>
      <div>
        <i className="fa fa-arrow-circle-o-right" />{' '}
        <a href={intervention.itv_url} target="_blank">Voir l&apos;intervention</a>
      </div>
    </div>
  );
};

DeputeLastIntervention.propTypes = {
  intervention: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  refetch: PropTypes.func.isRequired,
};

DeputeLastIntervention.defaultProps = { intervention: null };

export default DeputeLastIntervention;
