import React, { Component } from 'react'

import Shape from './Shape'

export default class Body extends Component {
  render () {
    return (
      <div className='home'>
        <div className='right-arrows'>
          <Shape rightArrows />
          <Shape rightArrows />
          <Shape rightArrows />
        </div>

        <div className='home-content'>
          <span className='hero-name'>
            Siddhant<br/>
            Sinha&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <Shape parallelogram />
          <span className='code hero-code'>
            (() => [<br/>
            &nbsp;&nbsp;...dev,<br />
            &nbsp;&nbsp;...design,<br />
            &nbsp;&nbsp;...alcohol<br/>
            ])();
          </span>
        </div>

        <div className='left-arrows'>
          <Shape leftArrows />
          <Shape leftArrows />
          <Shape leftArrows />
        </div>
      </div>
    )
  }
}