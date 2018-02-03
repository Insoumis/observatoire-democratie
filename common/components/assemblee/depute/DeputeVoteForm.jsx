import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { votesTri } from 'utility';

import SearchField from 'components/reusable/form/SearchField';
import SelectField from 'components/reusable/form/SelectField';
import CheckboxField from 'components/reusable/form/CheckboxField';

import css from './DeputeVoteSearch.scss';

const DeputeVotesForm = ({ handleSubmit, router }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if ((key !== 'page' && data[key].length) || key === 'dissidence') {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    router.push(`${router.location.pathname}?${qs.stringify(search)}`);
  };

  return (
    <form onSubmit={handleSubmit(data => goTo(data))}>
      <Field component={SearchField} name="requete" placeholder="Rechercher un scrutin public ..." />
      <div className={css.filters}>
        <Field
          name="position"
          component={SelectField}
          data={votesTri}
          onChange={(e, position) => goTo({ ...router.location.query, position })}
          textField="text"
          valueField="value"
        />
        <Field
          name="dissidence"
          component={CheckboxField}
          format={value => value === 1}
          label="Contre son groupe"
          onChange={(e, dissidence) => goTo({ ...router.location.query, dissidence })}
          parse={value => (value ? 1 : 0)}
        />
      </div>
    </form>
  );
};

DeputeVotesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default reduxForm({ form: 'deputeVotes' })(DeputeVotesForm);
