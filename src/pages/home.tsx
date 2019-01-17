import React from 'react'
import { Spring } from 'react-spring'

import styles from '../styles/home.module.css'
import '../styles/global.css'

const Home = () => (
  <div className={styles.container}>
    <Spring
      from={{ transform: 'translateX(100px)' }}
      to={{ transform: 'translateX(0px)' }}
    >
      {props => (
        <div className={styles.hero} style={props}>
          <span className={styles.pretext}>Hi, I'm</span>
          <span className={styles.name}>SID</span>
          <span className={styles.pretext}>and I'm a</span>
          <span className={styles.position}>PRODUCT ENGINEER</span>
          <span className={styles.description}>
            I’m a JavaScript developer based in Berlin.
            <br />
            I bring exceptional experiences to life on the web, desktop &
            mobile.
            <br />
            Currently working with{' '}
            <span className={styles.highlight}>Perdoo</span>.
          </span>
        </div>
      )}
    </Spring>

    <Spring
      from={{ transform: 'translateX(0px)' }}
      to={{ transform: 'translateX(900px)' }}
      config={{ friction: 50 }}
    >
      {props => <div style={props} className={styles.cover} />}
    </Spring>

    <Spring
      from={{ transform: 'translateX(-900px)' }}
      to={{ transform: 'translateX(0px)' }}
      config={{ friction: 50 }}
    >
      {props => <div style={props} className={styles.revealTriangle} />}
    </Spring>

    <Spring
      from={{ opacity: 0, transform: 'translateY(160px)' }}
      to={{ opacity: 1, transform: 'translateY(200px)' }}
      config={{ delay: 2000 }}
    >
      {props => <div style={props} className={styles.scrollIndicator} />}
    </Spring>
  </div>
)

export default Home
