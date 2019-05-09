import React, { Component } from 'react';
import Favicon from '../favicon/favicon';
import ListItem from '../list-item-mobile/listitem';
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
    const navigation = navOpen ? navActive : `${navActive} ${navUnactive}`;
    return (
      <>
        <button
          onClick={() => this.onPressMenuBtn()}
          className={navButton}
        >
          <Favicon icon={faBars} />
        </button>
        <ul className={navigation}>
          <ListItem text="Home" href="/#home" />
          <ListItem text="About" href="/#about" />
          <ListItem text="Feature" href="/#feature" />
          <ListItem text="Team" href="/#team" />
          <ListItem text="Why us" href="/#whyus" />
          <ListItem text="Feedback" href="/#feedback" />
          <ListItem text="Free consultation" href="/#consultation" />
        </ul>
      </>
    )
  }
};

export default Mobile;