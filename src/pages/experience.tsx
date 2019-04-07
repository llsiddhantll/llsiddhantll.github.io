import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import data from '../data/experience.json'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import List from '../components/list'

import Prisma from '../images/experience/prisma.svg'
import Perdoo from '../images/experience/perdoo.svg'
import Postman from '../images/experience/postman.svg'

import styles from '../styles/experience.module.css'

const Logos = {
  prisma: Prisma,
  perdoo: Perdoo,
  postman: Postman,
}

const Experience: React.SFC<{}> = () => (
  <Section id="experience" title={data.title}>
    {data.companies.map((company, idx) => {
      const Logo = Logos[company.id]
      return (
        <div className={styles.company} key={company.id}>
          <div className={styles.header}>
            <Logo className={styles.logo} />
            <div className={styles.title}>{company.title}</div>
            <div className={styles.years}>({company.years})</div>
            <a
              href={company.website.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.website}
            >
              {company.website.label}
            </a>
          </div>
          <Paragraph text={company.text} />
          <List items={company.tech} />
        </div>
      )
    })}
  </Section>
)

export default Experience
