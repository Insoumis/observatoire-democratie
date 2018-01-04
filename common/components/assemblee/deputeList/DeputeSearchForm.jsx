import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';
import classNames from 'classnames';

import { ages, csps, groups, regions } from 'utility';

import SearchField from 'components/reusable/form/SearchField';
import SelectField from 'components/reusable/form/SelectField';
import CheckboxField from 'components/reusable/form/CheckboxField';

import css from './DeputeSearch.scss';

class DeputeSearchForm extends Component {
  state = { displayFilters: false };

  goTo(data) {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && (key === 'ancien' || data[key].length)) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    this.props.router.push(`/assemblee/deputes/recherche?${qs.stringify(search)}`);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(data => this.goTo(data))}>
        <Field component={SearchField} name="requete" placeholder="Rechercher un député ..." />
        <div className={classNames('flex wrap space-between', css.filters, {
          [css.displayFilters]: this.state.displayFilters,
        })}
        >
          <Field
            name="groupe"
            component={SelectField}
            data={groups}
            onChange={(e, groupe) => this.goTo({ ...this.props.router.location.query, groupe })}
            textField="text"
            valueField="value"
          />
          <Field
            component={SelectField}
            data={[
              { text: 'Toutes les régions', value: '' },
              ...regions.map(region => ({ text: region, value: region })),
            ]}
            name="region"
            onChange={(e, region) => this.goTo({ ...this.props.router.location.query, region })}
            textField="text"
            valueField="value"
          />
          <Field
            component={SelectField}
            data={csps}
            name="csp"
            onChange={(e, csp) => this.goTo({ ...this.props.router.location.query, csp })}
            textField="text"
            valueField="value"
          />
          <Field
            component={SelectField}
            data={[
              { text: 'Tous les âges', value: '' },
              ...ages.map(age => ({ text: age, value: age })),
            ]}
            name="age"
            onChange={(e, age) => this.goTo({ ...this.props.router.location.query, age })}
            textField="text"
            valueField="value"
          />
        </div>
        <Field
          component={CheckboxField}
          format={val => val !== undefined}
          label="Montrer les anciens députés"
          name="ancien"
          onChange={(e, ancien) => this.goTo({ ...this.props.router.location.query, ancien })}
          parse={val => val === true || undefined}
        />
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
