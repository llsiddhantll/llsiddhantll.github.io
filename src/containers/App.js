import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import BlogContainer from './BlogContainer';
import ContactContainer from './ContactContainer';

export default class App extends Component {
  render() {
    return (
      <Router>        
        <div className='body-container'>
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/about" component={AboutContainer}/>
          <Route path="/blog" component={BlogContainer}/>
          <Route path="/contact" component={ContactContainer}/>
        </div>
      </Router>
    );
  }
}