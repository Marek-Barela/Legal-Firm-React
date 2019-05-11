import React from 'react';
import SectionHeader from '../section-header-left/header';
import styles from './consultation.module.css';

const Consultation = () => {
  const { wrapper, formContainer, imageContainer } = styles;
  return (
    <section id="consultation">
      <div className={wrapper}>
        <div className={formContainer}>
          <SectionHeader
            header="Free Consultation"
            paragraph="tLorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
          />
          <form onSubmit={console.log("Message has been send")}>
            <input type="name" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <select name="" id="">
              <option value="1">Practive Area</option>
              <option value="1">Criminal Law</option>
              <option value="1">International Law</option>
              <option value="1">Financial Law</option>
            </select>
            <textarea placeholder="Your Message" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className={imageContainer}></div>
      </div>
    </section>
  )
}
export default Consultation