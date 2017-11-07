import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { groups, regions, tris } from 'utility';

const DeputeRankingForm = ({ router }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if (data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    router.push(`/assemblee/deputes/ranking?${qs.stringify(search)}`);
  };

  return (
    <form className="flex wrap space-between">
      <Field
        name="order"
        component="select"
        onChange={(e, order) => goTo({ ...router.location.query, order })}
      >
        <option value="tops">Top</option>
        <option value="flops">Flop</option>
      </Field>
      <Field
        name="sort"
        component="select"
        onChange={(e, sort) => goTo({ ...router.location.query, sort })}
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

DeputeRankingForm.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'deputeSearch',
})(DeputeRankingForm);
