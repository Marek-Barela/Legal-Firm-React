import React from 'react';
import Favicon from '../favicon/favicon';
import styles from './featureitem.module.css';

const FeatureItem = props => {
  const { wrapper, ico, textWrapper, header, paragraph } = styles;
  const { icon, headerText, paragraphText } = props;
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

export default FeatureItem