import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const ListItem = ({ text, href, listItem }) => {
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
  href: PropTypes.string.isRequired,
  listItem: PropTypes.string
}

export default ListItem;