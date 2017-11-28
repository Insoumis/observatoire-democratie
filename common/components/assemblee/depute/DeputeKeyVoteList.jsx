import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import SelectField from 'components/reusable/form/SelectField';
import DeputeKeyVoteListItem from './DeputeKeyVoteListItem';

import css from './DeputeVotes.scss';

const CatField = reduxForm({
  enableReinitialize: true,
  form: 'deputeKeyVoteList',
})(({ data, handleChange }) => (
  <Field
    name="category"
    component={SelectField}
    data={data}
    onChange={(e, category) => handleChange(category)}
  />
));

class DeputeKeyVoteList extends Component {
  state = { category: Object.keys(this.props.keyVotes)[0] };

  render() {
    return (
      <div className={css.keyVotes}>
        <CatField
          data={Object.keys(this.props.keyVotes)}
          handleChange={category => this.setState({ category })}
          initialValues={{ category: this.state.category }}
        />
        {this.props.keyVotes[this.state.category].map(vote => (
          <DeputeKeyVoteListItem key={vote.scrutin_num} vote={vote} />
        ))}
      </div>
    );
  }
}

DeputeKeyVoteList.propTypes = { keyVotes: PropTypes.shape({}).isRequired };

export default DeputeKeyVoteList;
