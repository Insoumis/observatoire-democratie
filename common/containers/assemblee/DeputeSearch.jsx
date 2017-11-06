import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDeputeSearch } from 'actions/assemblee';
import { getDeputeSearch } from 'reducers';

import View from 'components/assemblee/DeputeSearch';

class DeputeList extends Component {
  static fetchData(dispatch, { location }) {
    return dispatch(fetchDeputeSearch(location.search));
  }

  componentDidMount() {
    const { deputeSearch, location } = this.props;
    if (deputeSearch.search !== location.search) {
      this.fetchDeputeSearch(location);
    }
  }

  componentWillReceiveProps({ location }) {
    if (this.props.location.search !== location.search) {
      this.fetchDeputeSearch(location);
    }
  }

  fetchDeputeSearch(location) {
    DeputeList.fetchData(this.props.dispatch, { location });
  }

  render() {
    return (
      <View
        deputeSearch={this.props.deputeSearch}
        fetchDeputeSearch={() => this.fetchDeputeSearch(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

DeputeList.propTypes = {
  deputeSearch: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeSearch: getDeputeSearch(state),
  }),
)(DeputeList);
