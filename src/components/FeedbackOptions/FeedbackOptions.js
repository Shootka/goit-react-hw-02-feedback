import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const {options} = this.props
    return (
      <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
        {options.map(({ name, feed }, index) => {
          return <button key={index} name={feed} onClick={(event) => this.props.onLeaveFeedback(event)}>{name}</button>;
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
