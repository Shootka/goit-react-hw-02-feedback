import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p style={{ margin: '5px 0' }}>Good: {good}</p>
        <p style={{ margin: '5px 0' }}>Neutral: {neutral}</p>
        <p style={{ margin: '5px 0' }}>Bad: {bad}</p>
        <p style={{ margin: '5px 0' }}>Total: {total()}</p>
        <p style={{ margin: '5px 0' }}>Positive feedback: {positivePercentage()}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
