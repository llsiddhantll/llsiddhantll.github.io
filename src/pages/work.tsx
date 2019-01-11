import React from "react";
import { StaticQuery, graphql } from "gatsby";
import map from "lodash/map";

import styles from "../styles/work.module.css"

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
          {map(site.siteMetadata.projects, project => (
            <div className={styles.project} key={project.id}>
              <div className={styles.projectThumbnail}></div>
              <span className={styles.projectName}>{project.name}</span>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)