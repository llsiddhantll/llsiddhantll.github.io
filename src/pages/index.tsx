import React from 'react'

import Layout from '../components/layout';
import "../styles/global.css";

import Home from './home'
import About from "./about";
import Experience from './experience'
import Projects from "./projects";

const Root = () => (
  <Layout>
    <Home />
    <About />
    <Experience />
    <Projects />
  </Layout>
)

export default Root;
