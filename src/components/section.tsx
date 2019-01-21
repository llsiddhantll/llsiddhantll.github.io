import React from 'react';

import styles from "../styles/section.module.css";

interface Props {
  title: string,
  id: string
}

const Section: React.SFC<Props> = ({ id, title, children }) => (
  <div id={id} className={styles.container}>
    <span className={styles.title}>{title}</span>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default Section;