import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { searchDeputeVotes, fetchDeputeVotes } from 'actions/assemblee';
import { getDeputeVotes } from 'reducers';

import View from 'components/assemblee/depute/DeputeVotesList';

class DeputeVotesList extends Component {
  componentDidMount() {
    this.fetchDeputeVotes(this.props.deputeVotes.search);
  }

  componentWillReceiveProps({ deputeVotes }) {
    if (this.props.deputeVotes.search !== deputeVotes.search) {
      this.fetchDeputeVotes(deputeVotes.search);
    }
  }

  fetchDeputeVotes(search) {
    this.props.fetchDeputeVotes(qs.stringify({
      ...search,
      depute: this.props.deputeId,
      itemsperpage: 5,
    }, { addQueryPrefix: true }));
  }

  render() {
    const { error, isPending, pagination, search, votes } = this.props.deputeVotes;

    return (
      <View
        error={error}
        isPending={isPending}
        newSearch={this.props.searchDeputeVotes}
        pagination={pagination}
        refetch={() => this.fetchDeputeVotes()}
        search={search}
        votes={votes}
      />
    );
  }
}

DeputeVotesList.propTypes = {
  deputeId: PropTypes.string.isRequired,
  deputeVotes: PropTypes.shape({
    votes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchDeputeVotes: PropTypes.func.isRequired,
  searchDeputeVotes: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    deputeVotes: getDeputeVotes(state),
  }),
  { fetchDeputeVotes, searchDeputeVotes },
)(DeputeVotesList);
