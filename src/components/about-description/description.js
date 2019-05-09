import React from 'react';
import { TeamMemberOne } from '../image';
import styles from './description.module.css';

const AboutDescription = () => {
  const { wrapper, imgColumn, textColumn } = styles;
  return (
    <div className={wrapper}>
      <div className={imgColumn}>
        <TeamMemberOne />
      </div>
      <div className={textColumn}>
        <h2>About Our Firm</h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede do eiusmod tempor incididunt ut labore dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <p>
          Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida.
        </p>
      </div>
    </div>
  )
}

export default AboutDescription