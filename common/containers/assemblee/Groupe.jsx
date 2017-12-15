import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchGroupe } from 'actions/assemblee';
import { getGroupe } from 'reducers';

import View from 'components/assemblee/groupe/Groupe';

class Groupe extends Component {
  static fetchData(dispatch, { params }) {
    return dispatch(fetchGroupe(params.id === 'NI' ? 'FI' : params.id));
  }

  state = { error: false };

  componentDidMount() {
    if (!this.props.groupe) {
      this.fetchGroupe();
    }
  }

  fetchGroupe() {
    const { dispatch, params } = this.props;
    this.setState({ error: false });
    Groupe.fetchData(dispatch, { params }).then((res) => {
      if (res instanceof Error) {
        this.setState({ error: true });
      }

      if (res.groupe_abrev !== params.id) {
        const { location, router } = this.props;
        router.push(location.pathname.replace(/(\/assemblee\/groupes\/)(\w+)(.*)/, `$1${res.groupe_abrev}$3`));
      }
    });
  }

  render() {
    return (
      <View
        groupe={this.props.groupe}
        error={this.state.error}
        fetchGroupe={() => this.fetchGroupe()}
      >
        {this.props.children}
      </View>
    );
  }
}

Groupe.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  groupe: PropTypes.shape({}),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Groupe.defaultProps = { groupe: undefined };

export default connect(
  (state, { params }) => ({
    groupe: getGroupe(state, params.id),
  }),
)(Groupe);
