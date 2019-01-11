import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';

import "../styles/global.css";

const Root = () => (
  <Layout>
    <SEO title= "Home" keywords = { [`gatsby`, `application`, `react`]} />
  </Layout>
)

export default Root;
