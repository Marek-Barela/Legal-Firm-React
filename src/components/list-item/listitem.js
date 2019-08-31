import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-scroll"

const ListItem = ({ text, href, listItem }) => {
  return (
    <li className={listItem}>
      <Link to={href} spy={true} smooth={true} offset={0} duration={500}>
        {text}
      </Link>
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  listItem: PropTypes.string,
}

export default ListItem
