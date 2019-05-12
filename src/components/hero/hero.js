import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './hero.module.css';

const Hero = () => {
  const { heroContainer, overlay, textContainer } = styles;
  return (
    <section id="home">
      <div className={heroContainer}>
        <div className={overlay}></div>
        <ScrollAnimation animateIn='bounceInUp'
          className={textContainer}
          initiallyVisible={false}
          animateOnce={true}
        >
          <h1>Welcome To Legal Firm</h1>
          <p>
            This should be used to tell a story and let your users know a little more about your service.
          </p>
          <a href="#consultation">
            <button>free consultation</button>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Hero;