import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { ages, csps, groups, regions } from 'utility';

import SearchField from 'components/reusable/form/SearchField';

const DeputeSearchForm = ({ handleSubmit, router }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if (data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    router.push(`/assemblee/deputes/search?${qs.stringify(search)}`);
  };

  return (
    <form onSubmit={handleSubmit(data => goTo(data))}>
      <Field component={SearchField} name="query" placeholder="Rechercher ..." />
      <div className="flex wrap space-between">
        <Field
          name="group"
          component="select"
          onChange={(e, group) => goTo({ ...router.location.query, group })}
        >
          <option value="">Tous les groupes</option>
          {groups.map(group => (
            <option key={group.value} value={group.value}>{group.text}</option>
          ))}
        </Field>
        <Field
          name="region"
          component="select"
          onChange={(e, region) => goTo({ ...router.location.query, region })}
        >
          <option value="">Toutes les régions</option>
          {regions.map(region => (
            <option key={region}>{region}</option>
          ))}
        </Field>
        <Field
          name="csp"
          component="select"
          onChange={(e, csp) => goTo({ ...router.location.query, csp })}
        >
          <option value="">Toutes les CSP</option>
          {csps.map(csp => (
            <option key={csp}>{csp}</option>
          ))}
        </Field>
        <Field
          name="age"
          component="select"
          onChange={(e, age) => goTo({ ...router.location.query, age })}
        >
          <option value="">Tous les âges</option>
          {ages.map(age => (
            <option key={age}>{age}</option>
          ))}
        </Field>
      </div>
    </form>
  );
};

DeputeSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'deputeSearch',
})(DeputeSearchForm);
