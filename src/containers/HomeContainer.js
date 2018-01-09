import React, { Component } from 'react'

import Home from '../components/Home';

import '../css/home.css';

export default class HomeContainer extends Component {
  render () {
    return (
      <div
        style={{ height: `${window.innerHeight}px` }}
        className='home-container'
      >
        <div className='marker-home' id='home' />
        <Home />
      </div>
    );
  }
};