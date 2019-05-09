import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import style from './listitem.module.css';

const ListItem = ({ text, href }) => {
  const { listItem } = style;
  return (
    <li className={listItem}>
      <Link to={href}>
        {text}
      </Link>
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default ListItem;