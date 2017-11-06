import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { groups, regions, tris } from 'utility';

const DeputeTopForm = ({ handleSubmit, router }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if (data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    router.push(`/assemblee/deputes/top?${qs.stringify(search)}`);
  };

  return (
    <form className="flex wrap space-between">
      <Field
        name="top"
        component="select"
        onChange={(e, top) => goTo({ ...router.location.query, top })}
      >
        <option value="top">Top</option>
        <option value="flop">Flop</option>
      </Field>
      <Field
        name="tri"
        component="select"
        onChange={(e, tri) => goTo({ ...router.location.query, tri })}
      >
        {tris.map(tri => (
          <option key={tri.value} value={tri.value}>{tri.text}</option>
        ))}
      </Field>
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
    </form>
  );
};

DeputeTopForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'deputeSearch',
})(DeputeTopForm);
