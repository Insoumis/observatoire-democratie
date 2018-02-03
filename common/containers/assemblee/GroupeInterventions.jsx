import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchInterventions } from 'actions/assemblee';
import { getGroupeInterventions } from 'reducers';

import View from 'components/assemblee/groupe/GroupeInterventions';

class GroupeInterventions extends Component {
  static fetchData(dispatch, { location, params }) {
    return dispatch(fetchInterventions(
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
    const { groupeInterventions, location, params } = this.props;
    if (groupeInterventions.search !== location.search) {
      this.fetchInterventions(location, params);
    }
  }

  componentWillReceiveProps({ location, params }) {
    if (this.props.location.search !== location.search) {
      this.fetchInterventions(location, params);
    }
  }

  fetchInterventions(location, params) {
    GroupeInterventions.fetchData(this.props.dispatch, { location, params });
  }

  render() {
    return (
      <View
        groupeInterventions={this.props.groupeInterventions}
        fetchInterventions={() => this.fetchInterventions(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

GroupeInterventions.propTypes = {
  groupeInterventions: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    groupeInterventions: getGroupeInterventions(state),
  }),
)(GroupeInterventions);
