import React from 'react';
import SectionHeader from '../section-header/header';
import styles from './feature.module.css';

const Features = () => {
  const { features, wrapper } = styles;
  return (
    <section id="features" className={features}>
      <div className={wrapper}>
        <SectionHeader
          headerText="Practice Areas"
          description="Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labeore dolore magna."
        />
      </div>
    </section>
  )
}

export default Features;