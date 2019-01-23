import React from 'react';

import Layout from '../components/layout';
import "../styles/global.css";

import Home from './home'
import About from "./about";
import Experience from './experience'
import Projects from './projects'
import Contact from "./contact";

const Root: React.SFC<{}> = () => (
  <Layout>
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
)

export default Root;
