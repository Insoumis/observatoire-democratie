import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';
import classNames from 'classnames';

import { ages, csps, groups, regions } from 'utility';

import SearchField from 'components/reusable/form/SearchField';

import css from './DeputeSearch.scss';

class DeputeSearchForm extends Component {
  state = { displayFilters: false };

  goTo(data) {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    this.props.router.push(`/assemblee/deputes/recherche?${qs.stringify(search)}`);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(data => this.goTo(data))}>
        <Field component={SearchField} name="query" placeholder="Rechercher un député ..." />
        <div className={classNames('flex wrap space-between', {
          [css.displayFilters]: this.state.displayFilters,
        })}
        >
          <Field
            name="group"
            component="select"
            onChange={(e, group) => this.goTo({ ...this.props.router.location.query, group })}
          >
            <option value="">Tous les groupes</option>
            {groups.map(group => (
              <option key={group.value} value={group.value}>{group.text}</option>
            ))}
          </Field>
          <Field
            name="region"
            component="select"
            onChange={(e, region) => this.goTo({ ...this.props.router.location.query, region })}
          >
            <option value="">Toutes les régions</option>
            {regions.map(region => (
              <option key={region}>{region}</option>
            ))}
          </Field>
          <Field
            name="csp"
            component="select"
            onChange={(e, csp) => this.goTo({ ...this.props.router.location.query, csp })}
          >
            <option value="">Toutes les CSP</option>
            {csps.map(csp => (
              <option key={csp}>{csp}</option>
            ))}
          </Field>
          <Field
            name="age"
            component="select"
            onChange={(e, age) => this.goTo({ ...this.props.router.location.query, age })}
          >
            <option value="">Tous les âges</option>
            {ages.map(age => (
              <option key={age}>{age}</option>
            ))}
          </Field>
        </div>
        <button
          className={css.toggleFilters}
          onClick={() => this.setState({ displayFilters: !this.state.displayFilters })}
          type="button"
        >
          {(this.state.displayFilters) ? 'Réduire les filtres' : 'Voir plus de filtres'}
        </button>
      </form>
    );
  }
}

DeputeSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'deputeSearch',
})(DeputeSearchForm);
