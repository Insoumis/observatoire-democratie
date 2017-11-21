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
      d3.select(this.wrapper).selectAll('div').remove();
      d3.select(this.node).selectAll('g').remove();
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

    const path = svg.selectAll('path')
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

    const tooltip = d3.select(this.wrapper)
      .append('div')
      .attr('class', css.tooltip);

    const wrapper = tooltip.append('div');

    wrapper.append('h4').attr('class', 'label');
    wrapper.append('strong').attr('class', 'percent');
    wrapper.append('div').attr('class', 'count');

    path.on('mouseover', (d) => {
      tooltip.attr('style', `height:${(height / 2) + 15}px;width:${(width / 2) + 15}px;border-color:${color(d.data.label)}`);
      tooltip.attr('class', `${css.tooltip} ${css.displayed}`);

      tooltip.select('.label').html(d.data.label);

      tooltip.select('.percent')
        .attr('style', `color:${color(d.data.label)}`)
        .html(`${Math.ceil((d.data.value / this.props.data.total) * 100)}%`);

      tooltip.select('.count').html(`(${d.data.value} / ${this.props.data.total})`);
    });

    path.on('mouseout', () => tooltip.attr('class', css.tooltip));
  }

  render() {
    return (
      <div ref={(node) => { this.wrapper = node; }}>
        <svg
          height={this.props.width}
          ref={(node) => { this.node = node; }}
          width={this.props.width}
        />
      </div>
    );
  }
}

KeyVoteGraph.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default withResize(KeyVoteGraph);
