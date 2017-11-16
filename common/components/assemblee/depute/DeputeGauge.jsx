import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as pictos from './assets/gauges';

class DeputeGauge extends Component {
  static polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians)),
    };
  }

  static describeArc(x, y, radius, startAngle, endAngle) {
    const start = DeputeGauge.polarToCartesian(x, y, radius, endAngle);
    const end = DeputeGauge.polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    ].join(' ');

    return d;
  }

  state = {};

  componentDidMount() {
    this.anime();
  }

  limit = 280 * (this.props.number / 100);

  nextval = 0;

  anime() {
    if (this.nextval < this.limit) {
      this.setState({
        animatedArc: DeputeGauge.describeArc(110, 110, 100, 220, 220 + this.nextval),
      });
      this.nextval += this.limit / 20;
      setTimeout(() => this.anime(), 30);
    } else {
      this.setState({
        animatedArc: DeputeGauge.describeArc(110, 110, 100, 220, 220 + this.limit),
      });
    }
  }

  render() {
    const Picto = pictos[this.props.picto];

    return (
      <svg viewBox="0 0 220 220" preserveAspectRatio="xMinYMin meet">
        <text textAnchor="middle" x="115" y="205" fontSize="38" fontWeight="bold" fill={this.props.color || '#82cde2'} style={{ fontFamily: 'Montserrat, sans serif' }}>
          {this.props.number}{this.props.unit}
        </text>
        <path
          d={DeputeGauge.describeArc(110, 110, 100, 220, 500)}
          fill="none"
          stroke={this.props.color || '#82cde2'}
          strokeOpacity="0.33"
          strokeWidth="20"
        />
        <path
          d={this.state.animatedArc}
          fill="none"
          stroke={this.props.color || '#82cde2'}
          strokeWidth="20"
        />
        <Picto />
      </svg>
    );
  }
}

DeputeGauge.propTypes = {
  color: PropTypes.string,
  number: PropTypes.string.isRequired,
  picto: PropTypes.string,
  unit: PropTypes.string,
};

DeputeGauge.defaultProps = {
  color: undefined,
  picto: 'participation',
  unit: '',
};

export default DeputeGauge;
