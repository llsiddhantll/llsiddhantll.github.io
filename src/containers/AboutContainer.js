import React, { Component } from 'react';

import About from '../components/About';

import '../css/about.css';

let links = [{
  icon: 'linkedin',
  href: 'https://linkedin.com/in/madebysid'
}, {
  icon: 'github',
  href: 'https://github.com/madebysid'
}, {
  icon: 'dribbble',
  href: 'https://dribbble.net/madebysid'
}, {
  icon: 'behance',
  href: 'https://behance.net/in/madebysid'
}, {
  icon: 'twitter',
  href: 'https://twitter.com/llsiddhantll'
}, {
  icon: 'angellist',
  href: 'https://angel.co/siddhantsinha'
}]

export default class AboutContainer extends Component {
  constructor (props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick (link) {
    link.href && window.open(link.href);
  }

  render () {
    return (
      <div className='about-container'>
        <div className='marker' id='about' />

        <About
          links={links}
          onLinkClick={this.handleLinkClick}
        />
      </div>
    );
  }
};