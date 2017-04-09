import React, { Component } from 'react'

import HeaderContainer from './HeaderContainer';
import Home from '../components/Home';

import '../css/home.css';

export default class HomeContainer extends Component {
  render () {
    return (
      <div className='home-container'>
        <HeaderContainer />
        <Home />
      </div>
    );
  }
};