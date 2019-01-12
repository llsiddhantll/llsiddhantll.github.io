import React from "react";

import styles from "../../styles/work.module.css";

export default ({ style, project }) => (
  <div style={style} className={styles.project} key={project.id}>
    <div className={styles.projectThumbnail}></div>
    <span className={styles.projectName}>{project.name}</span>
  </div>
);
