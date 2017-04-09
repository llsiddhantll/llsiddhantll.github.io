import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '../css/logo.css';

export default class Logo extends Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  getClasses () {
    return classnames({
      'logo': true,
      'logo-small': this.props.small,
      'logo-medium': this.props.medium,
      'logo-large': this.props.large,
      'is-clickable': !!this.props.onClick
    })
  }

  handleClick () {
    this.props.onClick && this.props.onClick()
  }

  render () {
    return (
      <div
        className={this.getClasses()}
        onClick={this.handleClick}
      />
    );
  }
};

Logo.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  onClick: PropTypes.func,
  small: PropTypes.bool
};

Logo.defaultProps = {
  small: true
}