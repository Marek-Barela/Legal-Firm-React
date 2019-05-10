import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from '../footer/footer';
import WOW from 'wowjs';
import "./layout.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

class Layout extends Component {
  componentDidMount() {
    new WOW.WOW().init()
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        {/** <Footer />*/}
      </>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
