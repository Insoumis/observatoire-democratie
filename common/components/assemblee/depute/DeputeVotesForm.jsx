import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { searchDeputeVotes } from 'actions/assemblee';

import SearchField from 'components/reusable/form/SearchField';

const DeputeVotesForm = ({ handleSubmit }) => (
  <form
    onSubmit={handleSubmit(
      (data, dispatch) => dispatch(searchDeputeVotes(data)),
    )}
  >
    <Field component={SearchField} name="query" placeholder="Rechercher un scrutin public ..." />
  </form>
);

DeputeVotesForm.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default reduxForm({ form: 'deputeVotes' })(DeputeVotesForm);
