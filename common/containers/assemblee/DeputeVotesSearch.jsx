import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchDeputeVotes } from 'actions/assemblee';
import { getDeputeVotes } from 'reducers';

import Form from 'components/assemblee/depute/DeputeVotesForm';
import List from 'components/assemblee/depute/DeputeVotesList';

class DeputeVotesSearch extends Component {
  state = { currentSearch: this.getSearch() };

  componentDidMount() {
    const { search } = this.props.deputeVotes;
    if (search !== this.state.currentSearch) {
      this.props.fetchDeputeVotes(this.state.currentSearch);
    }
  }

  getSearch(search) {
    return qs.stringify({
      ...search,
      depute: this.props.deputeId,
      itemsperpage: 5,
    }, { addQueryPrefix: true });
  }

  newSearch(newSearch) {
    this.setState({ currentSearch: this.getSearch(newSearch) });
    this.props.fetchDeputeVotes(this.getSearch(newSearch));
  }

  render() {
    const { error, isPending, pagination, search, votes } = this.props.deputeVotes;

    return (
      <div>
        <Form newSearch={newSearch => this.newSearch(newSearch)} />
        <List
          error={error}
          isPending={isPending}
          newSearch={newSearch => this.newSearch(newSearch)}
          pagination={pagination}
          refetch={
            () => this.props.fetchDeputeVotes(this.state.currentSearch)
          }
          search={qs.parse(search, { ignoreQueryPrefix: true })}
          votes={votes}
        />
      </div>
    );
  }
}

DeputeVotesSearch.propTypes = {
  deputeId: PropTypes.string.isRequired,
  deputeVotes: PropTypes.shape({
    votes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  fetchDeputeVotes: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    deputeVotes: getDeputeVotes(state),
  }),
  { fetchDeputeVotes },
)(DeputeVotesSearch);
