import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import styles from './header.module.css';

const SectionHeader = props => {
  const { headerText, description } = props;
  const { wrapper, header, paragraph, separator } = styles;
  return (
    <ScrollAnimation
      animateIn='slideInUp'
      className={wrapper}
      initiallyVisible={false}
      animateOnce={true}
    >
      <h2 className={header}>{headerText}</h2>
      <p className={paragraph}>{description}</p>
      <div className={separator}></div>
    </ScrollAnimation>
  )
}

SectionHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default SectionHeader;