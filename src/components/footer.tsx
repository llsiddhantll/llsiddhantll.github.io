import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import map from "lodash/map";

import styles from '../styles/footer.module.css'

import github from '../images/icons/github.svg'
import medium from '../images/icons/medium.svg'
import dribbble from '../images/icons/dribbble.svg'
import behance from '../images/icons/behance.svg'
import angellist from '../images/icons/angellist.svg'
import linkedin from "../images/icons/linkedin.svg";

const links = [
  {
    id: 'github',
    icon: github,
    url: 'https://github.com/madebysid',
  },
  {
    id: 'medium',
    icon: medium,
    url: 'https://medium.com/@madebysid',
  },
  {
    id: 'dribbble',
    icon: dribbble,
    url: 'https://dribbble.com/madebysid',
  },
  {
    id: 'behance',
    icon: behance,
    url: 'https://www.behance.net/madebysid',
  },
  {
    id: 'angellist',
    icon: angellist,
    url: 'https://angel.co/siddhantsinha',
  },
  {
    id: 'linkedin',
    icon: linkedin,
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
