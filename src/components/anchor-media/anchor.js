import React from 'react'
import Favicon from '../favicon/favicon';
import PropTypes from 'prop-types';

const Anchor = props => {
  const { url, ico } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Favicon icon={ico} />
    </a>
  )
}

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  ico: PropTypes.object.isRequired
}

export default Anchor;
