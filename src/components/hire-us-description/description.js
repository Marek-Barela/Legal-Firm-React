import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionHeader from '../section-header-left/header';
import FeatureItem from '../hire-us-feature/feature';
import styles from './description.module.css';
import { faBookOpen, faHandshake, faShieldAlt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const HireUsDescription = () => {
  const { wrapper, featuresContainer } = styles;
  return (
    <ScrollAnimation
      animateIn='fadeInRight'
      className={wrapper}
      initiallyVisible={false}
      animateOnce={true}
    >
      <SectionHeader
        header="Why Hire Us ?"
        paragraph="Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
      />
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
    </ScrollAnimation>
  )
}

export default HireUsDescription;