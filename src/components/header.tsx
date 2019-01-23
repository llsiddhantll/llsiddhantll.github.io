import React from 'react'
import { Link } from 'gatsby';
import { Trail } from "react-spring";

import styles from "../styles/header.module.css";

type HeaderLink = {
  id: string
  label: string
  url: string
  external?: boolean
  highlight?: true
};

const links: HeaderLink[] = [{
  id: 'about',
  label: 'About',
  url: '#about'
}, {
  id: 'experience',
  label: 'Experience',
  url: '#experience'
}, {
  id: 'projects',
  label: 'Projects',
  url: '#projects'
}, {
  id: 'resume',
  label: 'Resume',
  url: 'https://goo.gl/P6eL5k',
  external: true,
  highlight: true
}];

const Header: React.SFC<{}> = () => (
  <div className={styles.container}>
    <Trail
      items={links}
      keys={link => link.id}
      from={{ transform: 'translateY(-40px)' }}
      to={{ transform: 'translateY(0px)' }}
    >
      {(link: HeaderLink) => props => {
        if (link.external) {
          return (
            <a
              style={props}
              className={styles.linkExternal}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
            </a>
          ) 
        }

        return (
          <Link
            style={props}
            className={styles.link}
            activeClassName={styles.active}
            to={link.url}
          >
            {link.label}
          </Link>
        ) 
      }}
    </Trail>
  </div>
)

export default Header;
