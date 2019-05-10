import React from 'react';
import SectionHeader from '../section-header/header';
import AttorneysContainer from '../attorneys-container/attorneys';
import styles from './attorneys.module.css';

const attorneys = () => {
  const { section, wrapper } = styles;
  return (
    <section id="team" className={section}>
      <div className={wrapper}>
        <SectionHeader
          headerText="Experted Attorneys"
          description="Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labeore dolore magna."
        />
        <AttorneysContainer />
      </div>
    </section>
  )
}

export default attorneys;