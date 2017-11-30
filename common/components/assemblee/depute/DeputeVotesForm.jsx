import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { votesTri } from 'utility';

import SearchField from 'components/reusable/form/SearchField';
import SelectField from 'components/reusable/form/SelectField';
import CheckboxField from 'components/reusable/form/CheckboxField';

import css from './DeputeVotes.scss';

const DeputeVotesForm = ({ handleSubmit, newSearch }) => {
  let form;

  return (
    <form onSubmit={handleSubmit(data => newSearch(data))} ref={(node) => { form = node; }} >
      <Field component={SearchField} name="requete" placeholder="Rechercher un scrutin public ..." />
      <div className={css.filters}>
        <Field
          name="position"
          component={SelectField}
          data={votesTri}
          onChange={() => setTimeout(handleSubmit(data => newSearch(data)), 0)}
          textField="text"
          valueField="value"
        />
        <Field
          name="dissidence"
          component={CheckboxField}
          format={value => value === 1}
          label="Contre son groupe"
          onChange={() => setTimeout(handleSubmit(data => newSearch(data)), 0)}
          parse={value => (value ? 1 : 0)}
        />
      </div>
    </form>
  );
};

DeputeVotesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newSearch: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'deputeVotes' })(DeputeVotesForm);
