import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDeputeRandom, fetchKeyVotes, fetchLastIntervention } from 'actions/assemblee';
import { getHome } from 'reducers';

import View from 'components/Home';

class Home extends Component {
  static fetchData(dispatch) {
    return Promise.all([
      dispatch(fetchDeputeRandom()),
      dispatch(fetchKeyVotes()),
      dispatch(fetchLastIntervention()),
    ]);
  }

  componentDidMount() {
    if (!this.props.home.depute) {
      this.props.fetchDeputeRandom();
    }

    if (!this.props.home.keyVotes) {
      this.props.fetchKeyVotes();
    }

    if (!this.props.home.lastIntervention) {
      this.props.fetchLastIntervention();
    }
  }

  render() {
    return (
      <View
        home={this.props.home}
        refetchDepute={() => this.props.fetchDeputeRandom()}
        refetchKeyVotes={() => this.props.fetchKeyVotes()}
        refetchLastIntervention={() => this.props.fetchLastIntervention()}
      />
    );
  }
}

Home.propTypes = {
  fetchDeputeRandom: PropTypes.func.isRequired,
  fetchKeyVotes: PropTypes.func.isRequired,
  fetchLastIntervention: PropTypes.func.isRequired,
  home: PropTypes.shape({
    depute: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    keyVotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    lastIntervention: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  }).isRequired,
};

export default connect(
  state => ({
    home: getHome(state),
  }),
  { fetchDeputeRandom, fetchKeyVotes, fetchLastIntervention },
)(Home);
