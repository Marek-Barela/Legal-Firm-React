import React, { Component } from 'react';
import Favicon from '../favicon/favicon';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
          <Favicon icon={faBars} />
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