import React, { CSSProperties } from "react";

import styles from "../styles/testimonial.module.css";

interface Props {
  text: string,
  author: string,
  title: string,
  style: CSSProperties
}

const Testimonial: React.SFC<Props> = ({ style, text, author, title }) => (
  <div style={style} className={styles.container}>
    <span className={styles.text}>
      {`"${text}"`}
    </span>
    <span className={styles.author}>
      {author}
    </span>
    <span className={styles.title}>
      {title}
    </span>
  </div>
);

export default Testimonial;