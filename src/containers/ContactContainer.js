import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import Contact from '../components/Contact';

import '../css/contact.css';

export default class ContactContainer extends Component {
  render () {
    return (
      <div className='contact-container'>
        <HeaderContainer 
          selected='contact'
        />
        <Contact />
      </div>
    );
  }
};