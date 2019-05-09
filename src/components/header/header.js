import React, { Component } from "react";
import NavigationDesktop from '../navigation-desktop/navigation';
import { LogoLight, LogoBlack } from '../image';
import styles from './header.module.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolledNav: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPossition = window.scrollY;
    if (scrollPossition !== 0) {
      // if state is already true don't set state again
      if (this.state.scrolledNav) return
      this.setState({
        scrolledNav: true
      })
    }
    else {
      this.setState({
        scrolledNav: false
      })
    }
  }

  render() {
    const { scrolledNav } = this.state;
    const { headerUnactive, headerActive, wrapper } = styles;
    const header = scrolledNav ? headerActive : headerUnactive;
    return (
      <header className={header}>
        <div className={wrapper}>
          {scrolledNav ? <LogoBlack /> : <LogoLight />}
          <NavigationDesktop navActive={scrolledNav} />
        </div>
      </header>
    )
  }
}

export default Header;
