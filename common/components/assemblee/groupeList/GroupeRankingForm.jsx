import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { groupesTri } from 'utility';

import SelectField from 'components/reusable/form/SelectField';

import css from './GroupeRanking.scss';

class GroupeRankingForm extends Component {
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
    return (
      <form onSubmit={this.props.handleSubmit(data => this.goTo(data))}>
        <div className={`flex wrap space-between ${css.filters}`}>
          <Field
            component={SelectField}
            data={groupesTri}
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
