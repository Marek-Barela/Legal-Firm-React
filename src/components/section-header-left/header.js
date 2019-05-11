import React from 'react';
import styles from './header.module.css';

const Header = props => {
  const { header, paragraph } = props;
  const { headerText, paragraphText, separator } = styles;
  return (
    <>
      <h2 className={headerText}>{header}</h2>
      <p className={paragraphText}>{paragraph}</p>
      <div className={separator}></div>
    </>
  )
}

export default Header;