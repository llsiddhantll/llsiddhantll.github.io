import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import HeaderLinks from './HeaderLinks';

import '../css/header.css';

export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Logo
          small
        />
        <HeaderLinks
          selected={this.props.selected}
          links={this.props.links}
        />
      </div>
    );
  }
};

Header.propTypes = {
  links: PropTypes.array,
  selected: PropTypes.string
};