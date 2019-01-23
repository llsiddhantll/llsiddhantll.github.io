import React from "react";
import remark from 'remark';
import remark2react from 'remark-react';
import links from 'remark-external-links';

import styles from "../styles/paragraph.module.css";

interface Props {
  text: string[],
  size?: number,
  className?: React.CSSProperties
}

const Paragraph: React.SFC<Props> = ({ text, className }) => (
  <div className={[styles.container, className].join(' ')}>
    {text.map((line: string, idx: number) => (
      <React.Fragment key={idx}>
        {
          remark()
            .use(links)
            .use(remark2react)
            .processSync(line).contents
        }
      </React.Fragment>
    ))}
  </div>
)

Paragraph.defaultProps = {
  size: 18
};

export default Paragraph;