import React from 'react';
import SectionHeader from '../section-header-left/header';
import styles from './consultation.module.css';

const Consultation = () => {
  const { wrapper, formContainer } = styles;
  return (
    <section>
      <div className={wrapper}>
        <div className={formContainer}>
          <SectionHeader
            header="Free Consultation"
            paragraph="tLorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
          />
        </div>
      </div>
    </section>
  )
}
export default Consultation