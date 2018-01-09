import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../css/shape.css'

export default class Shape extends Component {
  getClasses () {
    return classnames({
      'shape': true,
      'arrows-left': this.props.leftArrows,
      'arrows-right': this.props.rightArrows,
      'parallelogram': this.props.parallelogram
    })
  }

  render () {
    return (
      <div className={this.getClasses()} />
    )
  }
}

Shape.propTypes = {
  leftArrows: PropTypes.bool,
  rightArrows: PropTypes.bool,
  parallelogram: PropTypes.bool
}