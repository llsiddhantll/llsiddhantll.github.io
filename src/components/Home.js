import React, { Component } from 'react'

import Shape from './Shape'

export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='right-arrows'>
          <Shape rightArrows />
          <Shape rightArrows />
          <Shape rightArrows />
        </div>

        <div className='home-content'>
          <div className='regular hero-name'>
            <div className='regular hero-name__first'>
              Siddhant
            </div>
            <div className='regular hero-name__last'>
              Sinha&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <Shape parallelogram />
          <div className='code hero-code'>
            <div className='hero-code__code'>
              <div>(() => [</div>
              <div>&nbsp;&nbsp;...dev,</div>
              <div>&nbsp;&nbsp;...music,</div>
              <div>&nbsp;&nbsp;...design</div>
              <div>])();</div>
            </div>
          </div>
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