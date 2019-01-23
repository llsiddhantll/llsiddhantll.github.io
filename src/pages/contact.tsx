import React from 'react'

import data from '../data/contact.json'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import List from '../components/list'

import styles from "../styles/contact.module.css";

const Contact: React.SFC<{}> = () => (
  <Section id="contact" title={data.title}>
    <Paragraph text={data.text} />
    <List items={data.opinions} className={styles.opinions} />
    <Paragraph text={data.closingText} className={styles.closingText} />
  </Section>
)

export default Contact
