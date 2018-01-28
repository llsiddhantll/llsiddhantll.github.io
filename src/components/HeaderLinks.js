import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

export default class HeaderLinks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      scroll: 0
    }

    this.getClasses = this.getClasses.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 50, { trailing: true, leading: true })
  }

  componentDidMount () {
    window.onscroll = this.handleScrollDebounced;
  }

  handleScroll () {
    this.setState({
      scroll: window.scrollY
    })
  }

  getClasses (link, index) {
    let upperLimit = (index + 1) * window.innerHeight - 144;
    let lowerLimit = (index + 2) * window.innerHeight - 144;

    return classnames({
      'header-link': true,
      [`header-link--${link}`]: true,
      'is-selected': (this.state.scroll >= upperLimit) && (this.state.scroll < lowerLimit)
    })
  }

  render () {
    return (
      <div className='header-links'>
        {
          _.map(this.props.links, (link, index) => {
            return (
              <a
                className={this.getClasses(link, index)}
                key={link}
                href={`#${link}`}
              >
                {link}
              </a>
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