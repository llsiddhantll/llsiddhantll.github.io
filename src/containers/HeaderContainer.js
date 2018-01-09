import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'

let links = [
  'about',
  'skills',
  'contact'
]

export default class HeaderContainer extends Component {
  render () {
    return (
      <Header
        links={links}
        selected={this.props.selected}
      />
    )
  }
}

HeaderContainer.propTypes = {
  selected: PropTypes.string
}