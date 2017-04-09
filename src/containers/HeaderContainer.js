import React, { Component } from 'react'
import Header from '../components/Header'

export default class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this)
    this.handleLogoClick = this.handleLogoClick.bind(this)
  }

  handleLinkClick (link) {
    console.log('Click link', link)
  }

  handleLogoClick () {
    console.log('Click logo')
  }

  render () {
    return (
      <div>
        <Header
          onLinkClick={this.handleLinkClick}
          onLogoClick={this.handleLogoClick}
        />
      </div>
    )
  }
}

HeaderContainer.propTypes = {

}