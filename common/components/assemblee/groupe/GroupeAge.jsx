import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class GroupeAge extends Component {
  componentDidMount() {
    // SET UP DIMENSIONS
    const w = 500;
    const h = 300;

    // margin.middle is distance from center line to each y-axis
    const margin = {
      top: 20,
      right: 20,
      bottom: 24,
      left: 20,
      middle: 28,
    };

    // the width of each side of the chart
    const regionWidth = (w / 2) - margin.middle;

    // these are the x-coordinates of the y-axes
    const pointA = regionWidth;
    const pointB = w - regionWidth;

    // some contrived data
    const exampleData = [
      { group: '0-9', male: 10, female: 12 },
      { group: '10-19', male: 14, female: 15 },
      { group: '20-29', male: 15, female: 18 },
      { group: '30-39', male: 18, female: 18 },
      { group: '40-49', male: 21, female: 22 },
      { group: '50-59', male: 19, female: 24 },
      { group: '60-69', male: 15, female: 14 },
      { group: '70-79', male: 8, female: 10 },
      { group: '80-89', male: 4, female: 5 },
      { group: '90-99', male: 2, female: 3 },
      { group: '100-109', male: 1, female: 1 },
    ];

    // GET THE TOTAL POPULATION SIZE AND CREATE A FUNCTION FOR RETURNING THE PERCENTAGE
    const totalPopulation = d3.sum(exampleData, d => d.male + d.female);
    const percentage = d => d / totalPopulation;


    // CREATE SVG
    const svg = d3.select('#test').append('svg')
      .attr('width', margin.left + w + margin.right)
      .attr('height', margin.top + h + margin.bottom)
      // ADD A GROUP FOR THE SPACE WITHIN THE MARGINS
      .append('g')
      .attr('transform', translation(margin.left, margin.top));

    // find the maximum data value on either side
    //  since this will be shared by both of the x-axes
    const maxValue = Math.max(
      d3.max(exampleData, d => percentage(d.male)),
      d3.max(exampleData, d => percentage(d.female)),
    );

    // SET UP SCALES

    // the xScale goes from 0 to the width of a region
    //  it will be reversed for the left x-axis
    const xScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, regionWidth])
      .nice();

    const xScaleLeft = d3.scaleLinear()
      .domain([0, maxValue])
      .range([regionWidth, 0]);

    const xScaleRight = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, regionWidth]);

    // const yScale = d3.scaleOrdinal()
    //   .domain(exampleData.map(d => d.group))
    //   .rangeRoundBands([h, 0], 0.1);

    const yScale = d3.scaleBand()
      .domain(exampleData.map(d => d.group))
      .range([h, 0])
      .round(0.1);


    // SET UP AXES
    const yAxisLeft = d3.axisRight()
      .scale(yScale)
      //.orient('right')
      .tickSize(4, 0)
      .tickPadding(margin.middle - 4);

    const yAxisRight = d3.axisLeft()
      .scale(yScale)
      //.orient('left')
      .tickSize(4, 0)
      .tickFormat('');

    const xAxisRight = d3.axisBottom()
      .scale(xScale)
      //.orient('bottom')
      .tickFormat(d3.format('%'));

    const xAxisLeft = d3.axisBottom()
      // REVERSE THE X-AXIS SCALE ON THE LEFT SIDE BY REVERSING THE RANGE
      .scale(xScale.copy().range([pointA, 0]))
      //.orient('bottom')
      .tickFormat(d3.format('%'));

    // MAKE GROUPS FOR EACH SIDE OF CHART
    // scale(-1,1) is used to reverse the left side so the bars grow left instead of right
    const leftBarGroup = svg.append('g')
      .attr('transform', `${translation(pointA, 0)}scale(-1,1)`);
    const rightBarGroup = svg.append('g')
      .attr('transform', translation(pointB, 0));

    // DRAW AXES
    svg.append('g')
      .attr('class', 'axis y left')
      .attr('transform', translation(pointA, 0))
      .call(yAxisLeft)
      .selectAll('text')
      .style('text-anchor', 'middle');

    svg.append('g')
      .attr('class', 'axis y right')
      .attr('transform', translation(pointB, 0))
      .call(yAxisRight);

    svg.append('g')
      .attr('class', 'axis x left')
      .attr('transform', translation(0, h))
      .call(xAxisLeft);

    svg.append('g')
      .attr('class', 'axis x right')
      .attr('transform', translation(pointB, h))
      .call(xAxisRight);

    // DRAW BARS
    leftBarGroup.selectAll('.bar.left')
      .data(exampleData)
      .enter().append('rect')
      .attr('class', 'bar left')
      .attr('x', 0)
      .attr('y', d => yScale(d.group))
      .attr('width', d => xScale(percentage(d.male)))
      .attr('height', yScale.bandwidth());

    rightBarGroup.selectAll('.bar.right')
      .data(exampleData)
      .enter().append('rect')
      .attr('class', 'bar right')
      .attr('x', 0)
      .attr('y', d => yScale(d.group))
      .attr('width', d => xScale(percentage(d.female)))
      .attr('height', yScale.bandwidth());


    // so sick of string concatenation for translations
    function translation(x, y) {
      return `translate(${x},${y})`;
    }
  }


  render() {
    return (
      <div id="test" />
    );
  }
}

GroupeAge.propTypes = {

};

export default GroupeAge;
