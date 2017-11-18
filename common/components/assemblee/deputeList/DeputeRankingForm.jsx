import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';
import classNames from 'classnames';

import { groups, regions, tris } from 'utility';

import SearchField from 'components/reusable/form/SearchField';

import css from './DeputeRanking.scss';

class DeputeRankingForm extends Component {
  state = { displayFilters: false };

  goTo(data) {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    this.props.router.push(`/assemblee/deputes/classement?${qs.stringify(search)}`);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(data => this.goTo(data))}>
        <Field component={SearchField} name="requete" placeholder="Rechercher un député ..." />
        <div className={classNames('flex wrap space-between', {
          [css.displayFilters]: this.state.displayFilters,
        })}
        >
          <Field
            name="tri"
            component="select"
            onChange={(e, tri) => this.goTo({ ...this.props.router.location.query, tri })}
          >
            {tris.map(tri => (
              <option key={tri.value} value={tri.value}>{tri.text}</option>
            ))}
          </Field>
          <Field
            name="ordre"
            component="select"
            onChange={(e, ordre) => this.goTo({ ...this.props.router.location.query, ordre })}
          >
            <option value="desc">Top</option>
            <option value="asc">Flop</option>
          </Field>
          <Field
            name="groupe"
            component="select"
            onChange={(e, groupe) => this.goTo({ ...this.props.router.location.query, groupe })}
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

DeputeRankingForm.propTypes = {
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
})(DeputeRankingForm);
