import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GroupeList extends Component {
  componentDidMount() {
    console.log(this.props.dispatch);
  }

  render() {
    return (
      <div>
        Page des groupes
      </div>
    );
  }
}

GroupeList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(GroupeList);
