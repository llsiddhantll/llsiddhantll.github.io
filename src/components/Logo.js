import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../css/logo.css';

export default class Logo extends Component {
  getClasses () {
    return classnames({
      'logo': true,
      'logo-small': this.props.small,
      'logo-medium': this.props.medium,
      'logo-large': this.props.large,
      'is-clickable': !!this.props.onClick
    })
  }

  render () {
    return (
      <a href='#home'>
        <div
          className={this.getClasses()}
        />
      </a>
    );
  }
};

Logo.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool
};

Logo.defaultProps = {
  small: true
}