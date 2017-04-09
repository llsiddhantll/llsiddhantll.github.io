import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import Blog from '../components/Blog';

import '../css/blog.css';

export default class BlogContainer extends Component {
  render () {
    return (
      <div className='home-container'>
        <HeaderContainer
          selected='blog'
        />
        <Blog />
      </div>
    );
  }
};