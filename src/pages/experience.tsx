import React from 'react';

import data from "../data/experience.json";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import List from "../components/list";

import styles from '../styles/experience.module.css';

const Experience: React.SFC<{}> = () => (
  <Section id="experience" title={data.title}>
    {data.companies.reverse().map((company, idx) => (
      <div className={styles.company} key={company.title}>
        <div className={styles.header}>
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
    ))}
  </Section>
);

export default Experience;
