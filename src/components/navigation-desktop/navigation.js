import React from "react";
import ListItem from '../list-item/listitem';
import styles from './navigation.module.css';

const Desktop = () => {
  const { navList } = styles;
  return (
    <nav>
      <ul className={navList}>
        <ListItem text="Home" href="/#home" />
        <ListItem text="About" href="/#about" />
        <ListItem text="Feature" href="/#feature" />
        <ListItem text="Team" href="/#team" />
        <ListItem text="Why us" href="/#whyus" />
        <ListItem text="Feedback" href="/#feedback" />
        <ListItem text="Free consultation" href="/#consultation" />
      </ul>
    </nav>
  )
};

export default Desktop;
