import React from "react";
import ListItem from '../list-item/listitem';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';

const Desktop = ({ navActive }) => {
  const { navIsActive, navIsUnactive } = styles;
  const navStyles = navActive ? navIsActive : navIsUnactive;
  return (
    <ul className={navStyles}>
      <ListItem text="Home" href="/#home" />
      <ListItem text="About" href="/#about" />
      <ListItem text="Feature" href="/#feature" />
      <ListItem text="Team" href="/#team" />
      <ListItem text="Why us" href="/#whyus" />
      <ListItem text="Feedback" href="/#feedback" />
      <ListItem text="Free consultation" href="/#consultation" />
    </ul>
  )
};

ListItem.propTypes = {
  navList: PropTypes.bool.isRequired,
}

export default Desktop;