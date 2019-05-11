import React from 'react';
import SectionHeader from '../section-header-left/header';
import styles from './consultation.module.css';

const Consultation = () => {
  const { wrapper, formContainer, imageContainer, form, inputWrapper, textarea } = styles;
  return (
    <section id="consultation">
      <div className={wrapper}>
        <div className={formContainer}>
          <SectionHeader
            header="Free Consultation"
            paragraph="Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
          />
          <form onSubmit={console.log("Message has been send")} className={form}>
            <div className={inputWrapper}>
              <input type="name" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <select name="">
              <option value="1">Practive Area</option>
              <option value="2">Criminal Law</option>
              <option value="3">International Law</option>
              <option value="4">Financial Law</option>
            </select>
            <textarea placeholder="Your Message" className={textarea} />
            <button type="submit">send request</button>
          </form>
        </div>
        <div className={imageContainer}></div>
      </div>
    </section>
  )
}
export default Consultation