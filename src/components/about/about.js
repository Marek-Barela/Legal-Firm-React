import React from 'react';
import Statistics from '../statistics/statistics';
import AboutDescription from '../about-description/description';
import styles from './about.module.css';

const About = () => {
  const { about, wrapper } = styles;
  return (
    <section id="about" className={about}>
      <div className={wrapper}>
        <Statistics />
        <AboutDescription />
      </div>
    </section>
  )
}

export default About;