import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchGroupeInterventions } from 'actions/assemblee';
import { getGroupeInterventions } from 'reducers';

import Form from 'components/assemblee/groupe/GroupeInterventionsForm';
import List from 'components/assemblee/groupe/GroupeInterventionsList';

class GroupeInterventionsSearch extends Component {
  state = { currentSearch: this.getSearch() };

  componentDidMount() {
    const { search } = this.props.groupeInterventions;
    if (search !== this.state.currentSearch) {
      this.props.fetchGroupeInterventions(this.state.currentSearch);
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
    this.props.fetchGroupeInterventions(this.getSearch(newSearch));
  }

  render() {
    const { error, isPending, pagination, search, interventions } = this.props.groupeInterventions;

    return (
      <div>
        <Form newSearch={newSearch => this.newSearch(newSearch)} />
        <List
          error={error}
          isPending={isPending}
          newSearch={newSearch => this.newSearch(newSearch)}
          pagination={pagination}
          refetch={
            () => this.props.fetchGroupeInterventions(this.state.currentSearch)
          }
          search={qs.parse(search, { ignoreQueryPrefix: true })}
          interventions={interventions}
        />
      </div>
    );
  }
}

GroupeInterventionsSearch.propTypes = {
  groupeId: PropTypes.string.isRequired,
  groupeInterventions: PropTypes.shape({
    interventions: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  fetchGroupeInterventions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    groupeInterventions: getGroupeInterventions(state),
  }),
  { fetchGroupeInterventions },
)(GroupeInterventionsSearch);
