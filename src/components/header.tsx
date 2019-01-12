import React from 'react'
import { Link } from 'gatsby';
import { Trail } from "react-spring";

import styles from "../styles/header.module.css";

const links: HeaderLink[] = [{
  id: 'work',
  label: 'Work',
  url: '/work'
}, {
  id: 'about',
  label: 'About',
  url: '/about'
}, {
  id: 'blog',
  label: 'Blog',
  url: '/blog'
}];

const Header = () => (
  <div className={styles.container}>
    <Trail
      items={links}
      keys={link => link.id}
      from={{ transform: 'translateY(-80px)' }}
      to={{ transform: 'translateY(0px)' }}
    >
      {(link: HeaderLink) => props => (
        <Link
          style={props}
          className={styles.link}
          activeClassName={styles.active}
          to={link.url}
        >
          {link.label}
        </Link>
      )}
    </Trail>
  </div>
)

export default Header;
