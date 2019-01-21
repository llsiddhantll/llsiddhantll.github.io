import React from 'react';

import data from "../data/projects";

import Section from "../components/section";
import Paragraph from "../components/Paragraph";
import styles from '../styles/projects.module.css';

const Projects: React.SFC<{}> = () => (
  <Section id="projects" title={data.title}>
    <Paragraph text={data.text} />
  </Section>
);

export default Projects;
