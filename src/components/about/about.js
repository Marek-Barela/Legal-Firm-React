import React from 'react';
import Statistics from '../statistics/statistics';
import styles from './about.module.css';

const About = () => {
  const { about, wrapper } = styles;
  return (
    <section id="about" className={about}>
      <div className={wrapper}>
        <Statistics />
      </div>
    </section>
  )
}

export default About;