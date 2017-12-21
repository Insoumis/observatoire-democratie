import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';
import classNames from 'classnames';

import { statsTri } from 'utility';

import SelectField from 'components/reusable/form/SelectField';

import css from './GroupeRanking.scss';

class GroupeRankingForm extends Component {
  state = { displayFilters: false };

  goTo(data) {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    this.props.router.push(`/assemblee/groupes?${qs.stringify(search)}`);
  }

  render() {
    const groupeStatsTri = [...statsTri];
    groupeStatsTri.pop();
    groupeStatsTri.push({
      text: 'Présence en commission',
      value: 'stats.commissions.toutes.present',
    });

    return (
      <form onSubmit={this.props.handleSubmit(data => this.goTo(data))}>
        <div className={classNames('flex wrap space-between', css.filters, {
          [css.displayFilters]: this.state.displayFilters,
        })}
        >
          <Field
            component={SelectField}
            data={groupeStatsTri}
            name="tri"
            onChange={(e, tri) => this.goTo({ ...this.props.router.location.query, tri })}
            textField="text"
            valueField="value"
          />
          <Field
            component={SelectField}
            data={[{
              text: 'Top',
              value: 'desc',
            }, {
              text: 'Flop',
              value: 'asc',
            }]}
            name="ordre"
            onChange={(e, ordre) => this.goTo({ ...this.props.router.location.query, ordre })}
            textField="text"
            valueField="value"
          />
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

GroupeRankingForm.propTypes = {
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
  form: 'groupeRanking',
})(GroupeRankingForm);
