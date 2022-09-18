import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const {title, children} = this.props
    return (
      <div>
        <h4 style={{marginBottom: 0}}>{title}</h4>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Section;
