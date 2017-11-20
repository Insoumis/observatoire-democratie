import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import { withResize } from 'utility';

import css from './KeyVoteList.scss';

class KeyVoteGraph extends Component {
  componentDidMount() {
    const { data } = this.props;
    this.data = [{
      label: 'Pour',
      value: data.pour,
    }, {
      label: 'Contre',
      value: data.contre,
    }, {
      label: 'Abstention',
      value: data.abstention,
    }, {
      label: 'Absent',
      value: data.absent,
    }];

    this.drawPie();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      d3.select(this.node).select('g').remove();
      this.drawPie();
    }
  }

  drawPie() {
    const { width } = this.props;
    const height = width;
    const radius = width / 2;
    const color = d3.scaleOrdinal()
      .range(['#25a87e', '#E23D21', '#213558', '#ddd']);

    const svg = d3.select(this.node)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3.arc()
      .innerRadius(radius - Math.ceil(width / 6))
      .outerRadius(radius);

    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    svg.selectAll('path')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));

    const legendRectSize = 18;
    const legendSpacing = 4;

    const legend = svg.selectAll(`.${css.legend}`)
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', css.legend)
      .attr('transform', (d, i) => {
        const legendHeight = legendRectSize + legendSpacing;
        const offset = legendHeight * (color.domain().length / 2);
        const horz = -2 * legendRectSize;
        const vert = (i * legendHeight) - offset;
        return `translate(${horz},${vert})`;
      });

    legend.append('rect')
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', color)
      .style('stroke', color);

    legend.append('text')
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize - legendSpacing)
      .text(d => d);
  }

  render() {
    return (
      <svg
        height={this.props.width}
        ref={(node) => { this.node = node; }}
        width={this.props.width}
      />
    );
  }
}

KeyVoteGraph.propTypes = {
  data: PropTypes.shape({

  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default withResize(KeyVoteGraph);
