import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'

class App extends Component {
  render() {
    return (
      <div className='root'>
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
