import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchWorks } from 'actions/assemblee';
import { getDeputeWorks } from 'reducers';

import View from 'components/assemblee/depute/DeputeWorks';

class DeputeWorks extends Component {
  static fetchData(dispatch, { location, params }) {
    return dispatch(fetchWorks(
      qs.stringify(
        {
          ...location.query,
          itemsperpage: 5,
          depute: params.id,
        },
        { addQueryPrefix: true },
      ),
    ));
  }

  componentDidMount() {
    const { deputeWorks, location, params } = this.props;
    if (deputeWorks.search !== location.search) {
      this.fetchWorks(location, params);
    }
  }

  componentWillReceiveProps({ location, params }) {
    if (this.props.location.search !== location.search) {
      this.fetchWorks(location, params);
    }
  }

  fetchWorks(location, params) {
    DeputeWorks.fetchData(this.props.dispatch, { location, params });
  }

  render() {
    return (
      <View
        deputeWorks={this.props.deputeWorks}
        fetchWorks={() => this.fetchWorks(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

DeputeWorks.propTypes = {
  deputeWorks: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeWorks: getDeputeWorks(state),
  }),
)(DeputeWorks);
