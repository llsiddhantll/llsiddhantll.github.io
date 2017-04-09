import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import Skills from '../components/Skills';

import '../css/skills.css';

export default class SkillsContainer extends Component {
  render () {
    return (
      <div className='contact-container'>
        <HeaderContainer 
          selected='skills'
        />
        <Skills />
      </div>
    );
  }
};