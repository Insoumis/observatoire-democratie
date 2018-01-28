import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchWorks } from 'actions/assemblee';
import { getGroupeWorks } from 'reducers';

import List from 'components/assemblee/groupe/GroupeWorksList';

class GroupeWorksSearch extends Component {
  state = { currentSearch: this.getSearch() };

  componentDidMount() {
    const { search } = this.props.groupeWorks;
    if (search !== this.state.currentSearch) {
      this.props.fetchWorks(this.state.currentSearch);
    }
  }

  getSearch(search) {
    return qs.stringify({
      ...search,
      groupe: this.props.groupeId,
      itemsperpage: 5,
    }, { addQueryPrefix: true });
  }

  newSearch(newSearch) {
    this.setState({ currentSearch: this.getSearch(newSearch) });
    this.props.fetchWorks(this.getSearch(newSearch));
  }

  render() {
    const { error, isPending, pagination, search, works } = this.props.groupeWorks;

    return (
      <div>
        <List
          error={error}
          isPending={isPending}
          newSearch={newSearch => this.newSearch(newSearch)}
          pagination={pagination}
          refetch={() => this.props.fetchWorks(this.state.currentSearch)}
          search={qs.parse(search, { ignoreQueryPrefix: true })}
          works={works}
        />
      </div>
    );
  }
}

GroupeWorksSearch.propTypes = {
  groupeId: PropTypes.string.isRequired,
  groupeWorks: PropTypes.shape({
    works: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  fetchWorks: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    groupeWorks: getGroupeWorks(state),
  }),
  { fetchWorks },
)(GroupeWorksSearch);
