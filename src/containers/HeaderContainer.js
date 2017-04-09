import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'

export default class HeaderContainer extends Component {
  render () {
    return (
      <div>
        <Header
          selected={this.props.selected}
        />
      </div>
    )
  }
}

HeaderContainer.propTypes = {
  selected: PropTypes.string
}