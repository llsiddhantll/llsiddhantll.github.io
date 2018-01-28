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
    this.isSelected = this.isSelected.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 50, { trailing: true, leading: true })
  }

  componentDidMount () {
    window.onscroll = this.handleScrollDebounced;
    this.handleScrollDebounced()
  }

  handleScroll () {
    this.setState({
      scroll: window.scrollY
    })
  }

  getClasses (link, index) {
    return classnames({
      'header-link': true,
      [`header-link--${link}`]: true,
      'is-selected': this.isSelected(index)
    })
  }

  isSelected (index) {
    let scrollY = this.state.scroll;

    let homeContainer = document.querySelector(`.home-container`),
        homeHeight = homeContainer && homeContainer.offsetHeight || 0;
    if (scrollY < homeHeight) {
      return false;
    }

    let upperEdge = homeHeight - 124,
        lowerEdge = 0;

    let previousLink = this.props.links[index - 1],
        previousContainer = document.querySelector(`.${previousLink}-container`);
    if (previousContainer) {
      upperEdge = previousContainer.offsetTop + previousContainer.offsetHeight - 124;
    }

    let link = this.props.links[index],
        container = document.querySelector(`.${link}-container`);
    if (container) {
      lowerEdge = upperEdge + container.offsetHeight;
    }

    if ((scrollY >= upperEdge) && (scrollY < lowerEdge)) {
      return true
    }

    return false;    
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