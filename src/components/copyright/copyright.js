import React from 'react';
import styles from './copyright.module.css';

const Copyright = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      © {new Date().getFullYear()} Created By Marek Bareła
    </div>
  )
}

export default Copyright;