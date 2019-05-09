import React from "react";
import NavigationDesktop from '../navigation-desktop/navigation';
import { Logo } from '../image';
import styles from './header.module.css';

const Header = () => {
  const { header, wrapper } = styles;
  return (
    <header className={header}>
      <div className={wrapper}>
        <Logo />
        <NavigationDesktop />
      </div>
    </header>
  )
}

export default Header;
