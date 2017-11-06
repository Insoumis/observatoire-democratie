import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDepute } from 'actions/assemblee';
import { getDepute } from 'reducers';

import View from 'components/assemblee/Depute';

class Depute extends Component {
  static fetchData(dispatch, { params }) {
    return dispatch(fetchDepute(params.id));
  }

  state = { error: false };

  componentDidMount() {
    if (!this.props.depute) {
      this.fetchDepute();
    }
  }

  fetchDepute() {
    const { dispatch, params } = this.props;
    this.setState({ error: false });
    Depute.fetchData(dispatch, { params }).then((res) => {
      if (res instanceof Error) {
        this.setState({ error: true });
      }
    });
  }

  render() {
    return (
      <View
        depute={this.props.depute}
        error={this.state.error}
        fetchDepute={() => this.fetchDepute()}
      />
    );
  }
}

Depute.propTypes = {
  depute: PropTypes.shape({}),
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

Depute.defaultProps = { depute: undefined };

export default connect(
  (state, { params }) => ({
    depute: getDepute(state, params.id),
  }),
)(Depute);
