import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class HamburgerMenu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  render () {
    return (
      <div className='hamburger-menu'>
        <div className='hamburger-menu__icon' onClick={this.handleToggle} />
        {
          this.state.isOpen &&
            <ul className='hamburger-menu__menu' style={{ height: `${window.innerHeight - 120}px` }}>
              {
                _.map(this.props.links, (link, index) => {
                  return (
                    <li key={link}>
                      <a
                        className='hamburger-menu__menu-item code'
                        onClick={this.handleToggle}
                        href={`#${link}`}
                      >
                        {link}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
        }
      </div>
    );
  }
};

HamburgerMenu.propTypes = {
  links: PropTypes.array
};