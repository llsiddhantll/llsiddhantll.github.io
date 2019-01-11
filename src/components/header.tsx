import { Link } from 'gatsby'
import React from 'react'

import styles from "../styles/header.module.css";

const Header = () => (
  <div className={styles.container}>
    <Link className={styles.link} activeClassName={styles.active} to="/work">
      Work
    </Link>
    <Link className={styles.link} activeClassName={styles.active} to="/about">
      About
    </Link>
    <Link className={styles.link} activeClassName={styles.active} to="/blog">
      Blog
    </Link>
  </div>
)

export default Header
