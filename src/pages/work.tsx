import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Trail } from "react-spring";

import WorkItem from "../components/work/work-item";
import styles from "../styles/work.module.css";

const query = graphql`
  {
    site {
      siteMetadata {
        projects {
          id
          name
        }
      }
    }
  }
`

import Layout from "../components/layout";

export default () => (
  <Layout>
    <StaticQuery
      query={query}
      render={({ site }) => (
        <div className={styles.container}>
          <Trail
            items={site.siteMetadata.projects}
            keys={item => item.id}
            from={{ opacity: 0, transform: 'translateX(-200px)' }}
            to={{ opacity: 1, transform: 'translateX(0)' }}
          >
            {project => props => <WorkItem project={project} style={props} />}
          </Trail>
        </div>
      )}
    />
  </Layout>
)