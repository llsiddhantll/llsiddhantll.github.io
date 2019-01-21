import React from 'react';
import { Spring } from 'react-spring';

import data from "../data/home.json";

import Paragraph from '../components/paragraph'
import Testimonial from "../components/testimonial";

import styles from '../styles/home.module.css';
import '../styles/global.css';

const Home: React.SFC<{}> = () => (
  <div className={styles.container}>
    <Spring
      from={{ transform: 'translateX(100px)' }}
      to={{ transform: 'translateX(0px)' }}
    >
      {props => (
        <div className={styles.hero} style={props}>
          <span className={styles.pretext}>Hi, I'm</span>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.pretext}>and I'm a</span>
          <span className={styles.position}>{data.title}</span>
          <Paragraph
            className={styles.description}
            text={data.text}
          >
          </Paragraph>
        </div>
      )}
    </Spring>

    <div className={styles.testimonials}>
      <Spring
        from={{ transform: 'translateY(-50px)', opacity: 0 }}
        to={{ transform: 'translateX(0px)', opacity: 1 }}
        config={{ delay: 1000, friction: 50 }}
      >
        {props => (
          <React.Fragment key={1}>
            {data.testimonials.map((testimonial, idx) => (
              <Testimonial
                key={idx}
                style={props}
                text={testimonial.text}
                author={testimonial.author}
                title={testimonial.title}
              />
            ))}
          </React.Fragment>
        )}
      </Spring>
    </div>

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

console.log("Ey, close this! It's private!");

export default Home;
