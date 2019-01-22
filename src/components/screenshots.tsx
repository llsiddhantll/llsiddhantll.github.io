import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import FullscreenImage from "./fullscreen-image";

import styles from "../styles/screenshots.module.css";

interface Props {
  items: string[]
}

const previewQuery = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/png/" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

class Screenshots extends React.Component<Props> {
  state = {
    active: null,
  }

  handleChangeActive = item => {
    this.setState({ active: item });
    document.addEventListener('scroll', this.handleClose, { once: true });
  }

  handleClose = () => {
    this.setState({ active: null });
  }

  render = () => {
    const { items } = this.props
    const { active } = this.state

    return (
      <>
        {items.map((item: string, idx: number) => (
          <StaticQuery
            query={previewQuery}
            render={({ images }) => {
              const image = images.edges.find(i => i.node.relativePath === item)
              return (
                <div onClick={this.handleChangeActive.bind(this, item)}>
                  <Img
                    className={styles.preview}
                    key={idx}
                    fixed={image.node.childImageSharp.fixed}
                  />
                </div>
              )
            }}
          />
        ))}

        <FullscreenImage active={active} onClose={this.handleClose} />
      </>
    )
  }
};

export default Screenshots;