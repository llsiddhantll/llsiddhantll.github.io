import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import FullscreenImage from "./fullscreen-image";

import styles from "../styles/screenshots.module.css";

interface Props {
  items: string[]
}

interface State {
  active: null | string
}

const previewQuery = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/png/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

class Screenshots extends React.Component<Props, State> {
  state = {
    active: null
  }

  handleChangeActive = (item: string) => {
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
            key={idx}
            query={previewQuery}
            render={({ images }) => {
              const image = images.edges.find(i => i.node.relativePath === item)
              return (
                <div className={styles.preview} onClick={this.handleChangeActive.bind(this, item)}>
                  <Img
                    critical // TODO:: Figure out a way around this. Without this, the image falls back to the low size one on Chrome
                    key={idx}
                    fluid={image.node.childImageSharp.fluid}
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