import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import BlogContainer from './BlogContainer';
import SkillsContainer from './SkillsContainer';

export default class App extends Component {
  render() {
    return (
      <Router>        
        <Route render={({ location }) => (
          <div className='body-container'>
            <CSSTransitionGroup
              transitionName='fade'
              transitionEnterTimeout={250}
              transitionLeaveTimeout={250}
            >
              <Route
                exact
                key={location.key + '1'}
                location={location}
                path='/'
                component={HomeContainer}
              />
              <Route
                exact
                key={location.key + '2'}
                location={location}
                path='/about'
                component={AboutContainer}
              />
              <Route
                exact
                key={location.key + '3'}
                location={location}
                path='/skills'
                component={SkillsContainer}
              />
              <Route
                exact
                key={location.key + '4'}
                location={location}
                path='/blog'
                component={BlogContainer}
              />
            </CSSTransitionGroup>
          </div>
        )} />
      </Router>
    );
  }
}