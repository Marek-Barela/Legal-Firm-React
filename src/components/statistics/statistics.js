import React from 'react';
import StatisticsElement from '../statistics-element/element';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import styles from './statistics.module.css';

const Statistics = () => {
  const { statistics } = styles;
  return (
    <div className={statistics}>
      <StatisticsElement
        icon={faGavel}
        number={821}
        labelText="Cases won"
      />
      <StatisticsElement
        icon={faBook}
        number={57}
        labelText="Skilled Lawyers"
      />
      <StatisticsElement
        icon={faBalanceScale}
        number={4582}
        labelText="Happy Clients"
      />
      <StatisticsElement
        icon={faMedal}
        number={320}
        labelText="Great Rewards"
      />
    </div>
  )
}

export default Statistics;