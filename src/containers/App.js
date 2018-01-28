import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import ContactContainer from './ContactContainer';
import SkillsContainer from './SkillsContainer';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <HeaderContainer />
        <HomeContainer />
        <AboutContainer />
        <SkillsContainer />
        <ContactContainer />
      </div>
    );
  }
}