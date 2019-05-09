import React from 'react';
import ListItem from '../list-item/listitem';
import PropTypes from 'prop-types';
import style from './listitem.module.css';

const Item = ({ text, href }) => {
  const { listItem } = style;
  const props = { text, href, listItem };
  return (
    <ListItem {...props} />
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Item;