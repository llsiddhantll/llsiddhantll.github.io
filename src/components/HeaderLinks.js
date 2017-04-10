import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

import '../css/header-links.css';

export default class HeaderLinks extends Component {
  constructor (props) {
    super(props);

    this.getClasses = this.getClasses.bind(this);
  }

  getClasses (link) {
    return classnames({
      [`header-link header-link--${link}`]: true,
      'is-selected': link === this.props.selected
    })
  }

  render () {
    return (
      <div className='header-links'>
        {
          _.map(this.props.links, (link) => {
            return (
              <Link
                className={this.getClasses(link)}
                key={link}
                to={`/${link}`}
              >
                {link}
              </Link>
            )
          })
        }
      </div>
    );
  }
};

HeaderLinks.propTypes = {
  links: PropTypes.array.isRequired,
  selected: PropTypes.string
};