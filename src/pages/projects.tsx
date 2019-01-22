import React from 'react';

import data from "../data/projects";

import Section from "../components/section";
import Paragraph from '../components/paragraph'
import List from "../components/list";
import Tabs from '../components/tabs'
import Tab from '../components/tab'
import Screenshots from '../components/screenshots';
import ProjectLogo from "../components/project-logo";

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
              <ProjectLogo project={project.name} />
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
                <div className={styles.links}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <Github />
                      <span className={styles.linkLabel}>Source</span>
                    </a>
                  )}
                  {project.links.blog && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                       className={styles.link}
                    >
                      <Medium />
                      <span className={styles.linkLabel}>
                        Thoughts and stuff
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        </Tab>
      ))}
    </Tabs>
  </Section>
)

export default Projects;
