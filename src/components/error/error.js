import React from 'react';
import styles from './error.module.css';

const Error = () => {
  const { wrapper, layer } = styles;
  return (
    <>
      <div className={layer}></div>
      <div className={wrapper}>
        <h1>404 NOT FOUND</h1>
      </div>
    </>
  )
}

export default Error