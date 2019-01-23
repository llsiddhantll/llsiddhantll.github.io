import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "../styles/projects.module.css";

interface Props {
  project: string
}

const query = graphql`
  query {
    images: allFile(filter: { name: { regex: "/logo/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fixed(width: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const ProjectLogo: React.SFC<Props> = ({ project }) => {
  return (
    <StaticQuery query={query} render={({ images }) => {
      const image = images.edges.find(i => i.node.relativePath.includes(project.toLowerCase()))
      if (!image) {
        return null;
      }

      return <Img critical className={styles.logo} fluid={image.node.childImageSharp.fixed} />
    }}
    />
  );
};

export default ProjectLogo;
