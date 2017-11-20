import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDeputeRandom, fetchKeyVotes } from 'actions/assemblee';
import { getHome } from 'reducers';

import View from 'components/Home';

class Home extends Component {
  static fetchData(dispatch) {
    return dispatch(fetchKeyVotes());
  }

  componentDidMount() {
    if (!this.props.home.depute) {
      this.props.fetchDeputeRandom();
    }

    if (!this.props.home.keyVotes) {
      this.props.fetchKeyVotes();
    }
  }

  render() {
    return (
      <View
        home={this.props.home}
        refetchDepute={() => this.props.fetchDeputeRandom()}
        refetchKeyVotes={() => this.props.fetchKeyVotes()}
      />
    );
  }
}

Home.propTypes = {
  fetchDeputeRandom: PropTypes.func.isRequired,
  fetchKeyVotes: PropTypes.func.isRequired,
  home: PropTypes.shape({
    depute: PropTypes.shape({}),
    keyVotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  }).isRequired,
};

export default connect(
  state => ({
    home: getHome(state),
  }),
  { fetchDeputeRandom, fetchKeyVotes },
)(Home);
