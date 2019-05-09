import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  const { heroContainer, overlay, textContainer } = styles;
  return (
    <div className={heroContainer}>
      <div className={overlay}></div>
      <div className={textContainer}>
        <h1>Welcome To Legal Firm</h1>
        <p>
          This should be used to tell a story and let your users know a little more about your service.
        </p>
        <button>free consultation</button>
      </div>
    </div>
  )
}

export default Hero;