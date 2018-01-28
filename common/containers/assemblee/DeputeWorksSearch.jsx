import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchDeputeWorks } from 'actions/assemblee';
import { getDeputeWorks } from 'reducers';

import List from 'components/assemblee/depute/DeputeWorksList';

class DeputeWorks extends Component {
  state = { currentSearch: this.getSearch() };

  componentDidMount() {
    const { search } = this.props.deputeWorks;
    if (search !== this.state.currentSearch) {
      this.props.fetchDeputeWorks(this.state.currentSearch);
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
    this.props.fetchDeputeWorks(this.getSearch(newSearch));
  }

  render() {
    const { error, isPending, pagination, search, works } = this.props.deputeWorks;

    return (
      <div>
        <List
          error={error}
          isPending={isPending}
          newSearch={newSearch => this.newSearch(newSearch)}
          pagination={pagination}
          refetch={() => this.props.fetchDeputeWorks(this.state.currentSearch)}
          search={qs.parse(search, { ignoreQueryPrefix: true })}
          works={works}
        />
      </div>
    );
  }
}

DeputeWorks.propTypes = {
  deputeId: PropTypes.string.isRequired,
  deputeWorks: PropTypes.shape({
    works: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  fetchDeputeWorks: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    deputeWorks: getDeputeWorks(state),
  }),
  { fetchDeputeWorks }
)(DeputeWorks);
