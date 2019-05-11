import React from 'react';
import HireUsDescription from '../hire-us-description/description';
import styles from './hireus.module.css';

const HireUsSection = () => {
  const { container, imageContainer } = styles;
  return (
    <section id="whyus" className={container}>
      <div className={`${imageContainer} wow fadeInLeft`}></div>
      <HireUsDescription />
    </section>
  )
}

export default HireUsSection;
