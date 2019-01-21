import React from "react";

import styles from "../styles/paragraph.module.css";

interface Props {
  text: string[],
  size?: number,
  className?: CSSProperties
}

const Paragraph: React.SFC<Props> = ({ text, className }) => (
  <div className={[styles.container, className].join(' ')}>
    {text.map((line: string, idx: number) => (
      <React.Fragment key={idx}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ))}
  </div>
)

Paragraph.defaultProps = {
  size: 18
};

export default Paragraph;