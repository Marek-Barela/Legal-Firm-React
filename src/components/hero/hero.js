import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  const { heroContainer, overlay, textContainer } = styles;
  return (
    <section id="home">
      <div className={heroContainer}>
        <div className={overlay}></div>
        <div className={textContainer}>
          <h1 className="wow slideInLeft">Welcome To Legal Firm</h1>
          <p className="wow slideInRight">
            This should be used to tell a story and let your users know a little more about your service.
          </p>
          <button className="wow slideInUp">free consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Hero;