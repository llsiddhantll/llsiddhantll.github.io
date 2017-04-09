import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../css/header-links.css';


export default class HeaderLinks extends Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (link) {
    this.props.onLinkClick(link)
  }

  render () {
    return (
      <div className='header-links'>
        {
          _.map(this.props.links, (link) => {
            return (
              <div
                className={`header-link header-link--${link}`}
                key={link}
                onClick={this.handleClick.bind(this, link)}
              >
                {link}
              </div>
            )
          })
        }
      </div>
    );
  }
};

HeaderLinks.propTypes = {
  links: PropTypes.array.isRequired,
  onLinkClick: PropTypes.func.isRequired
};