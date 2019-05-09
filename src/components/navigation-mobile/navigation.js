import React, { Component } from 'react';
import styles from './navigation.module.css';

class Mobile extends Component {
  state = {
    navOpen: true
  }

  onPressMenuBtn = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    const { navOpen } = this.state;
    const { navActive, navUnactive, navButton } = styles;
    const navigation = navOpen ? navActive : navUnactive;
    return (
      <>
        <button
          onClick={() => this.onPressMenuBtn()}
          className={navButton}
        >
          press
        </button>
        <ul className={navigation}>
          <li>example</li>
          <li>example</li>
          <li>example</li>
        </ul>
      </>
    )
  }
};

export default Mobile;