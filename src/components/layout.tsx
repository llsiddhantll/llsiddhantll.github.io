import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer';

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
