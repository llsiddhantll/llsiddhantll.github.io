import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from "../styles/header.module.css";

const Header = () => (
  <div className={styles.container}>
    <Link className={styles.link} activeClassName={styles.active} to="/blog">
      Blog
    </Link>
    <Link className={styles.link} activeClassName={styles.active} to="/about">
      About
    </Link>
    <Link className={styles.link} activeClassName={styles.active} to="/work">
      Work
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
