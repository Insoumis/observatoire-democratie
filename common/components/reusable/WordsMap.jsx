import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WordCloud from 'wordcloud';

import { withResize } from 'utility';

class WordsMap extends Component {
  componentDidMount() {
    this.drawMap();
  }

  componentDidUpdate() {
    this.drawMap();
  }

  drawMap() {
    WordCloud(this.node, {
      gridSize: Math.round((16 * this.node.offsetWidth) / 1024),
      weightFactor: size => 0.3 * size,
      list: this.props.words,
      color: (word, weight) => {
        if (weight < 50) {
          return '#82cde2';
        } else if (weight < 130) {
          return '#213558';
        }

        return '#ff0052';
      },
      backgroundColor: 'transparent',
    });
  }

  render() {
    return (
      <canvas
        id="canvas"
        height={this.props.height}
        ref={(node) => { this.node = node; }}
        width={this.props.width}
      />
    );
  }
}

WordsMap.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  words: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default withResize(WordsMap);
