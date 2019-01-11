import React from 'react'
import PropTypes from 'prop-types'

import Header from './header';

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
