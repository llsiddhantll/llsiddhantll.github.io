import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import IconLink from './IconLink';

export default class About extends Component {
  constructor (props) {
    super(props);

    this.openResume = this.openResume.bind(this);
  }

  openResume () {
    window.open('https://goo.gl/Hqlcuv')
  }

  render () {
    return (
      <div className='about'>
        <div className='about-content'>
          <div className='purple-shape-1' />

          <div className='about-text'>
            <div className='about-hero'>
              <div className='code about-greeting'>Hola!</div>
              <div className='code about-name'>I'm Siddhant, <br /> and I do things with Javascript</div>
              <div className='code about-subtext'>(and a little bit of illustrator)</div>
            </div>

            <div className='regular about-description'>
              I’m a 22-year old graduate who loves everything web. 
              I’ve been working with it for close to four years now.
              I love learning about new ideas and the tech they inspire.<br />
              I’m obsessed with Rocket League and keeping my Downloads folder organized. 
            </div>
          </div>

          <div className='green-shape-1' />
        </div>

        <div className='about-footer'>
          <div
            className='about-resume'
            onClick={this.openResume}
          >
            Download my Resume
          </div>

          <div className='about-links'>
          {
            _.map(this.props.links, (link) => {
              return (
                <IconLink
                  icon={link.icon}
                  key={link.href}
                  onClick={this.props.onLinkClick.bind(this, link)}
                />
              );
            })
          }
          </div>
        </div>
      </div>
    );
  }
};

About.propTypes = {
  links: PropTypes.array
}