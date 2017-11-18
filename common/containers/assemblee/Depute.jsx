import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDepute } from 'actions/assemblee';
import { getDepute } from 'reducers';

import View from 'components/assemblee/depute/Depute';

class Depute extends Component {
  static fetchData(dispatch, { params }) {
    return dispatch(fetchDepute(params.id));
  }

  state = { error: false };

  componentDidMount() {
    if (!this.props.depute || !this.props.depute.votes_cles) {
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

      if (res.id !== params.id) {
        const { location, router } = this.props;
        router.push(location.pathname.replace(/(\/assemblee\/deputes\/)(\w+)(.*)/, `$1${res.id}$3`));
      }
    });
  }

  render() {
    return (
      <View
        depute={this.props.depute}
        error={this.state.error}
        fetchDepute={() => this.fetchDepute()}
      >
        {this.props.children}
      </View>
    );
  }
}

Depute.propTypes = {
  children: PropTypes.node.isRequired,
  depute: PropTypes.shape({
    votes_cles: PropTypes.shape({}),
  }),
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Depute.defaultProps = { depute: undefined };

export default connect(
  (state, { params }) => ({
    depute: getDepute(state, params.id),
  }),
)(Depute);
