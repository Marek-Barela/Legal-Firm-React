import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

const SectionHeader = props => {
  const { headerText, description } = props;
  const { wrapper, header, paragraph, separator } = styles;
  return (
    <div className={wrapper}>
      <h2 className={header}>{headerText}</h2>
      <p className={paragraph}>{description}</p>
      <div className={separator}></div>
    </div>
  )
}

SectionHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default SectionHeader;