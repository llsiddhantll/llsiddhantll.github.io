import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import map from "lodash/map";

import styles from '../styles/footer.module.css'

import github from "../images/icons/github.png";

const links = [
  {
    id: 'github',
    icon: github,
    url: 'https://github.com/madebysid',
  },
  {
    id: 'medium',
    icon: github,
    url: 'https://medium.com/@madebysid',
  },
  {
    id: 'dribbble',
    icon: github,
    url: 'https://dribbble.com/madebysid',
  },
  {
    id: 'behance',
    icon: github,
    url: 'https://www.behance.net/madebysid',
  },
  {
    id: 'angellist',
    icon: github,
    url: 'https://angel.co/siddhantsinha',
  },
  {
    id: 'linkedin',
    icon: github,
    url: 'https://www.linkedin.com/in/madebysid',
  },
]

const Footer = () => (
  <div className={styles.container}>
    {map(links, link => (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.link}
        key={link.id}
      >
        <img src={link.icon} className={styles.icon} />
      </a>
    ))}
  </div>
)

export default Footer
