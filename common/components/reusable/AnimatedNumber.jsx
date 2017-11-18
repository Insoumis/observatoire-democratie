import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

class AnimatedNumber extends Component {
  state = { number: 0 };

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    if (this.animation) {
      clearTimeout(this.animation);
    }
  }

  getNextState() {
    let nextState;
    for (let i = 100000000; i >= 1; i /= 10) {
      if (this.props.value >= this.state.number + i) {
        nextState = this.state.number + i;
        break;
      }
    }
    return nextState;
  }

  animate() {
    if (this.state.number < this.props.value) {
      this.animation = setTimeout(() => this.animate(), 30);
      this.setState({
        number: this.getNextState(),
      });
    }
  }

  render() {
    return (
      <span>{formatNbr(this.state.number)}</span>
    );
  }
}

AnimatedNumber.propTypes = { value: PropTypes.number.isRequired };

export default AnimatedNumber;
