import React, { Component } from 'react'

import Home from '../components/Home';

import '../css/home.css';

export default class HomeContainer extends Component {
  render () {
    return (
      <div className='home-container'>
        <div className='marker-home' id='home' />
        <Home />
      </div>
    );
  }
};