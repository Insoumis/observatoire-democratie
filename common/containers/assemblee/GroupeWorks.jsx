import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchWorks } from 'actions/assemblee';
import { getGroupeWorks } from 'reducers';

import View from 'components/assemblee/groupe/GroupeWorks';

class GroupeWorks extends Component {
  static fetchData(dispatch, { location, params }) {
    return dispatch(fetchWorks(
      qs.stringify(
        {
          ...location.query,
          itemsperpage: 5,
          groupe: params.id,
        },
        { addQueryPrefix: true },
      ),
    ));
  }

  componentDidMount() {
    const { groupeWorks, location, params } = this.props;
    if (groupeWorks.search !== location.search) {
      this.fetchWorks(location, params);
    }
  }

  componentWillReceiveProps({ location, params }) {
    if (this.props.location.search !== location.search) {
      this.fetchWorks(location, params);
    }
  }

  fetchWorks(location, params) {
    GroupeWorks.fetchData(this.props.dispatch, { location, params });
  }

  render() {
    return (
      <View
        groupeWorks={this.props.groupeWorks}
        fetchWorks={() => this.fetchWorks(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

GroupeWorks.propTypes = {
  groupeWorks: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    groupeWorks: getGroupeWorks(state),
  }),
)(GroupeWorks);
