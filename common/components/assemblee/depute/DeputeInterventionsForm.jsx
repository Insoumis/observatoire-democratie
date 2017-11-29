import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import SearchField from 'components/reusable/form/SearchField';

const DeputeInterventionsForm = ({ handleSubmit, newSearch }) => (
  <form onSubmit={handleSubmit(data => newSearch(data))}>
    <Field component={SearchField} name="requete" placeholder="Rechercher une intervention ..." />
  </form>
);

DeputeInterventionsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newSearch: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'deputeInterventions' })(DeputeInterventionsForm);
