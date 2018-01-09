import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IconLink extends Component {
  render () {
    return (
      <div
        className={`icon-link ${this.props.icon}`}
        onClick={this.props.onClick}
      >
        { this.props.text }  
      </div>
    );
  }
};

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string
};