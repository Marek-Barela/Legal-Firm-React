import React from 'react';
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

export default SectionHeader;