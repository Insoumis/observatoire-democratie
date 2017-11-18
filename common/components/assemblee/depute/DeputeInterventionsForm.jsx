import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { searchDeputeInterventions } from 'actions/assemblee';

import SearchField from 'components/reusable/form/SearchField';

const DeputeInterventionsForm = ({ handleSubmit }) => (
  <form
    onSubmit={handleSubmit(
      (data, dispatch) => dispatch(searchDeputeInterventions(data)),
    )}
  >
    <Field component={SearchField} name="requete" placeholder="Rechercher une intervention ..." />
  </form>
);

DeputeInterventionsForm.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default reduxForm({ form: 'deputeInterventions' })(DeputeInterventionsForm);
