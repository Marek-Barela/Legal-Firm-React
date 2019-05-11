import React from 'react'
import styles from './description.module.css';
import FeatureItem from '../hire-us-feature/feature';
import { faBookOpen, faHandshake, faShieldAlt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const HireUsDescription = () => {
  const { wrapper, headerText, paragraphText, separator, featuresContainer } = styles;
  return (
    <div className={`${wrapper} wow fadeInRight`}>
      <div>
        <h2 className={headerText}>Why Hire Us ?</h2>
        <p className={paragraphText}>Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna.</p>
        <div className={separator}></div>
      </div>
      <div className={featuresContainer}>
        <FeatureItem
          icon={faBookOpen}
          headerText="Exclusively Areas"
          paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
        />
        <FeatureItem
          icon={faHandshake}
          headerText="Group Of Lawyers"
          paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
        />
        <FeatureItem
          icon={faShieldAlt}
          headerText="Cases Results"
          paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
        />
        <FeatureItem
          icon={faBalanceScale}
          headerText="Experts In Law"
          paragraphText="Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide."
        />
      </div>
    </div>
  )
}

export default HireUsDescription;