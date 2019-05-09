import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from '../footer/footer';
import "./layout.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
      {/** <Footer />*/}
    </React.Fragment>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
