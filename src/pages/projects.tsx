import React from 'react';

import data from "../data/projects";

import Section from "../components/section";
import Paragraph from '../components/paragraph'
import List from "../components/list";
import Tabs from '../components/tabs'
import Tab from '../components/tab'
import Screenshots from '../components/screenshots';

import Github from '../images/icons/github.svg'
import Medium from '../images/icons/medium.svg'

import styles from '../styles/projects.module.css';

const Projects: React.SFC<{}> = () => (
  <Section id="projects" title={data.title}>
    <Paragraph text={data.text} />
    <Tabs>
      {data.projects.map(project => (
        <Tab title={project.name}>
          <>
            <div className={styles.header}>
              <span className={styles.name}>{project.name}</span>
            </div>
            <Paragraph text={project.text} />
            <div className={styles.details}>
              <div className={styles.screenshots}>
                <span className={styles.detailTitle}>Screenshots</span>
                <Screenshots items={project.screenshots} />
              </div>
              <div className={styles.tech}>
                <span className={styles.detailTitle}>Tech</span>
                <List items={project.tech} />
              </div>
              <div className={styles.links}>
                {project.links.github && (
                  <>
                    <Github />
                    <span className={styles.linkLabel}>Source</span>
                  </>
                )}
                {project.links.blog && (
                  <>
                    <Medium />
                    <span className={styles.linkLabel}>Thoughts and stuff</span>
                  </>
                )}
              </div>
            </div>
          </>
        </Tab>
      ))}
    </Tabs>
  </Section>
)

export default Projects;
