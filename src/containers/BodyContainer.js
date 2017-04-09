import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import Body from '../components/Body'

import '../css/body.css'

export default class BodyContainer extends Component {
  render () {
    return (
      <div className='body-container'>
        <Body />
      </div>
    )
  }
}

BodyContainer.propTypes = {

}