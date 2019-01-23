import React from 'react';

import data from "../data/about.json";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import List from "../components/list";

const About: React.SFC<{}> = () => (
  <Section id="about" title={data.title}>
    <Paragraph text={data.text} />
    <List items={data.tech} columns={2} />
  </Section>
);

export default About;
