import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './header.module.css';

const Header = props => {
  const { header, paragraph } = props;
  const { headerText, paragraphText, separator } = styles;
  return (
    <ScrollAnimation
      animateIn='fadeInUp'
      initiallyVisible={false}
      animateOnce={true}
    >
      <h2 className={headerText}>{header}</h2>
      <p className={paragraphText}>{paragraph}</p>
      <div className={separator}></div>
    </ScrollAnimation>
  )
}

export default Header;