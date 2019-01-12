import React from 'react'
import { Trail } from 'react-spring'

import styles from '../styles/footer.module.css'

import github from '../images/icons/github.svg'
import medium from '../images/icons/medium.svg'
import dribbble from '../images/icons/dribbble.svg'
import behance from '../images/icons/behance.svg'
import angellist from '../images/icons/angellist.svg'
import linkedin from "../images/icons/linkedin.svg";

const links: FooterLink[] = [
  {
    id: 'github',
    icon: github,
    url: 'https://github.com/madebysid'
  },
  {
    id: 'medium',
    icon: medium,
    url: 'https://medium.com/@madebysid'
  },
  {
    id: 'dribbble',
    icon: dribbble,
    url: 'https://dribbble.com/madebysid'
  },
  {
    id: 'behance',
    icon: behance,
    url: 'https://www.behance.net/madebysid'
  },
  {
    id: 'angellist',
    icon: angellist,
    url: 'https://angel.co/siddhantsinha'
  },
  {
    id: 'linkedin',
    icon: linkedin,
    url: 'https://www.linkedin.com/in/madebysid'
  },
]

const Footer = () => (
  <div className={styles.container}>
    <Trail
      items={links}
      keys={link => link.id}
      from={{ transform: 'translateY(80px)' }}
      to={{ transform: 'translateY(0px)' }}
    >
      {(link: FooterLink) => props => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
          style={props}
          key={link.id}
        >
          <img src={link.icon} className={styles.icon} />
        </a>
      )}
    </Trail>
  </div>
)

export default Footer
