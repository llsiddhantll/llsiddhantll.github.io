import React, { Component } from 'react'
import Shape from './Shape'

export default class Contact extends Component {
  handleChange (field, e) {
    this.props.onFieldChange && this.props.onFieldChange(field, e.target.value)
  }

  render () {
    return (
      <div className='contact'>
        <div className='green-shape-1' />
        <div className='contact-content'>
          <input
            className='contact-input contact-input--email'
            value={this.props.email}
            placeholder='Your email address'
            onChange={this.handleChange.bind(this, 'email')}
          />
          <textarea
            className='contact-input contact-input--body'
            value={this.props.body}
            placeholder={'Let\'s talk about anything and everything!'}
            onChange={this.handleChange.bind(this, 'body')}
          />
          <button
            className='contact-submit-button'
            onClick={this.props.onSend}
          >
            Let's talk
          </button>
        </div>
        <div className='left-arrows'>
          <Shape leftArrows />
          <Shape leftArrows />
          <Shape leftArrows />
        </div>
      </div>
    )
  }
}