import React from 'react'
import FeatureItem from '../feature-item/featureitem';
import { faShieldAlt, faLandmark, faHandshake, faHandHoldingUsd, faMoneyBill, faBookReader } from '@fortawesome/free-solid-svg-icons';

import styles from './features.module.css';

const Features = () => {
  const { wrapper } = styles;
  return (
    <div className={`${wrapper} wow fadeInUp`}>
      <FeatureItem
        icon={faShieldAlt}
        headerText="Criminal Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
      <FeatureItem
        icon={faLandmark}
        headerText="Real Estate Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
      <FeatureItem
        icon={faHandHoldingUsd}
        headerText="Family Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
      <FeatureItem
        icon={faHandshake}
        headerText="International Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
      <FeatureItem
        icon={faMoneyBill}
        headerText="Financial Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
      <FeatureItem
        icon={faBookReader}
        headerText="Technology Law"
        paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
      />
    </div>
  )
}

export default Features