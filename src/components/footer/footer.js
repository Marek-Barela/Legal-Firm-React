import React from 'react';
import FooterWidget from '../footer-widget/widget';
import Copyright from '../copyright/copyright';

const footer = () => {
  return (
    <footer style={{ backgroundColor: "#363636" }}>
      <FooterWidget />
      <Copyright />
    </footer>
  )
}

export default footer;