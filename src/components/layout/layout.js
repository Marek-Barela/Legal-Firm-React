import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from '../footer/footer';
import "animate.css/animate.min.css";
import "./layout.css";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
