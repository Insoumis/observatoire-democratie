import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchVotes } from 'actions/assemblee';
import { getDeputeVotes } from 'reducers';

import View from 'components/assemblee/depute/DeputeVoteSearch';

class DeputeVoteSearch extends Component {
  static fetchData(dispatch, { location, params }) {
    return dispatch(fetchVotes(
      qs.stringify(
        {
          ...location.query,
          depute: params.id,
          itemsperpage: 5,
        },
        { addQueryPrefix: true },
      ),
    ));
  }

  componentDidMount() {
    const { deputeVotes, location, params } = this.props;
    if (deputeVotes.search !== location.search) {
      this.fetchVotes(location, params);
    }
  }

  componentWillReceiveProps({ location, params }) {
    if (this.props.location.search !== location.search) {
      this.fetchVotes(location, params);
    }
  }

  fetchVotes(location, params) {
    DeputeVoteSearch.fetchData(this.props.dispatch, { location, params });
  }

  render() {
    return (
      <View
        deputeVotes={this.props.deputeVotes}
        fetchVotes={() => this.fetchVotes(this.props.location, this.props.params)}
        router={this.props.router}
      />
    );
  }
}

DeputeVoteSearch.propTypes = {
  deputeVotes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeVotes: getDeputeVotes(state),
  }),
)(DeputeVoteSearch);
