import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const {message} = this.props
    return (
      <h3>{message}</h3>
    );
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired
};


export default Notification;
