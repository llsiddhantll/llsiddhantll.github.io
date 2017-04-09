import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import About from '../components/About';

import '../css/about.css';

export default class AboutContainer extends Component {
  render () {
    return (
      <div className='about-container'>
        <HeaderContainer
          selected='about'
        />
        <About />
      </div>
    );
  }
};