import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchGroupeRanking } from 'actions/assemblee';
import { getGroupeRanking } from 'reducers';

import View from 'components/assemblee/groupeList/GroupeRanking';

class GroupeRanking extends Component {
  static fetchData(dispatch, { location }) {
    return dispatch(fetchGroupeRanking(location.search));
  }

  componentDidMount() {
    const { groupeRanking, location } = this.props;
    if (groupeRanking.search !== location.search) {
      this.fetchGroupeRanking(location);
    }
  }

  componentWillReceiveProps({ location }) {
    if (this.props.location.search !== location.search) {
      this.fetchGroupeRanking(location);
    }
  }

  fetchGroupeRanking(location) {
    GroupeRanking.fetchData(this.props.dispatch, { location });
  }

  render() {
    return (
      <View
        groupeRanking={this.props.groupeRanking}
        fetchGroupeRanking={() => this.fetchGroupeRanking(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

GroupeRanking.propTypes = {
  groupeRanking: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    groupeRanking: getGroupeRanking(state),
  }),
)(GroupeRanking);
