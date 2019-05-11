import React from 'react';
import SectionHeader from '../section-header/header';
import TestimonialsContainer from '../testimonials-container/testimonials';
import styles from './testimonials.module.css';

const Testimonials = () => {
  const { wrapper } = styles;
  return (
    <section id="feedback">
      <div className={wrapper}>
        <SectionHeader
          headerText="Clients Feedback"
          description="Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
        />
        <TestimonialsContainer />
      </div>
    </section>
  )
}

export default Testimonials;