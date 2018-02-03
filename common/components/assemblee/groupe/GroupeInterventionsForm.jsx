import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import SearchField from 'components/reusable/form/SearchField';

const GroupeInterventionsForm = ({ handleSubmit, router }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    router.push(`${router.location.pathname}?${qs.stringify(search)}`);
  };

  return (
    <form onSubmit={handleSubmit(data => goTo(data))}>
      <Field component={SearchField} name="requete" placeholder="Rechercher une intervention ..." />
    </form>
  );
};

GroupeInterventionsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default reduxForm({ form: 'groupeInterventions' })(GroupeInterventionsForm);
