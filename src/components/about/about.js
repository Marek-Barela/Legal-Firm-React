import React from 'react';
import styles from './about.module.css';

const About = () => {
  const { about, wrapper } = styles;
  return (
    <section id="about" className={about}>
      <div className={wrapper}>

      </div>
    </section>
  )
}

export default About;