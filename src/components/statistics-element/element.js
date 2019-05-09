import React from 'react';
import Favicon from '../favicon/favicon';
import CountUp from 'react-countup';
import styles from './element.module.css';
import PropTypes from 'prop-types';

const StatisticsElement = (props) => {
  const { icon, number, labelText } = props;
  const { statElement, statTextContainer, counter, label } = styles;
  return (
    <div className={statElement}>
      <Favicon icon={icon} />
      <div className={statTextContainer}>
        <span className={counter}><CountUp start={0} end={number} duration={10} /></span>
        <span className={label}>{labelText}</span>
      </div>
    </div>
  )
}

StatisticsElement.propTypes = {
  icon: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired
}

export default StatisticsElement;