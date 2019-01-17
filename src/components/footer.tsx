import React from 'react'
import { Trail } from 'react-spring'

import styles from '../styles/footer.module.css'

import Github from '../images/icons/github.svg'
import Medium from '../images/icons/medium.svg'
import Dribbble from '../images/icons/dribbble.svg'
import Behance from '../images/icons/behance.svg'
import Angellist from '../images/icons/angellist.svg'
import LinkedIn from "../images/icons/linkedin.svg";

type FooterLink = {
  id: string
  icon: string
  url: string
}

const links: FooterLink[] = [
  {
    id: 'github',
    icon: Github,
    url: 'https://github.com/madebysid'
  },
  {
    id: 'medium',
    icon: Medium,
    url: 'https://medium.com/@madebysid'
  },
  {
    id: 'dribbble',
    icon: Dribbble,
    url: 'https://dribbble.com/madebysid'
  },
  {
    id: 'behance',
    icon: Behance,
    url: 'https://www.behance.net/madebysid'
  },
  {
    id: 'angellist',
    icon: Angellist,
    url: 'https://angel.co/siddhantsinha'
  },
  {
    id: 'linkedin',
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/madebysid'
  },
]

const Footer: React.SFC<{}> = () => (
  <div className={styles.container}>
    <Trail
      items={links}
      keys={link => link.id}
      from={{ transform: 'translateX(100px)' }}
      to={{ transform: 'translateX(0px)' }}
    >
      {(link: FooterLink) => props => {
        const Icon = link.icon;
        return (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
            style={props}
            key={link.id}
          >
            <Icon className={styles.icon} />
          </a>
        )
      }}
    </Trail>
  </div>
)

export default Footer
