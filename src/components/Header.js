import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import HeaderLinks from './HeaderLinks';

import '../css/header.css';

export default class Header extends Component {
  constructor (props) {
    super(props);

    this.getLinks = this.getLinks.bind(this)
  }

  getLinks () {
    return [
      'about',
      'blog',
      'contact'
    ]
  }

  render () {
    return (
      <div className='header'>
        <Logo
          small
        />
        <HeaderLinks
          selected={this.props.selected}
          links={this.getLinks()}
        />
      </div>
    );
  }
};

Header.propTypes = {
  selected: PropTypes.string
};