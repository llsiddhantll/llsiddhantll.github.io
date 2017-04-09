import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import BlogContainer from './BlogContainer';
import SkillsContainer from './SkillsContainer';

export default class App extends Component {
  render() {
    return (
      <Router>        
        <div className='body-container'>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/blog" component={BlogContainer}/>
          <Route exact path="/skills" component={SkillsContainer}/>
        </div>
      </Router>
    );
  }
}