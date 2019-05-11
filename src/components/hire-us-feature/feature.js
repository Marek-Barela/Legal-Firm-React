import React from 'react'
import Favicon from '../favicon/favicon';
import styles from './feature.module.css';

const Feature = props => {
  const { icon, headerText, paragraphText } = props;
  const { wrapper, ico, textWrapper, header, paragraph } = styles;
  return (
    <div className={wrapper}>
      <Favicon icon={icon} size="2x" className={ico} />
      <div className={textWrapper}>
        <h3 className={header}>{headerText}</h3>
        <p className={paragraph}>{paragraphText}</p>
      </div>
    </div>
  )
}

export default Feature;
