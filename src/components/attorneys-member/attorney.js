import React from 'react';
import Img from "gatsby-image";
import MediaAnchor from '../anchor-media/anchor';
import PropTypes from 'prop-types';
import styles from './attorney.module.css';
import { faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AttorneysMember = props => {
  const { container, wrapper, layer, textContainer } = styles;
  const { image, name, position, facebookUrl, googleUrl, twitterUrl, LinkedinUrl } = props;
  return (
    <div className={container}>
      <div className={wrapper}>
        <Img fluid={image} />
        <div className={layer}>
          <MediaAnchor url={facebookUrl} ico={faFacebookF} />
          <MediaAnchor url={googleUrl} ico={faGooglePlusG} />
          <MediaAnchor url={twitterUrl} ico={faTwitter} />
          <MediaAnchor url={LinkedinUrl} ico={faLinkedinIn} />
        </div>
      </div>
      <div className={textContainer}>
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </div>
  )
}

AttorneysMember.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  facebookUrl: PropTypes.string.isRequired,
  googleUrl: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
  LinkedinUrl: PropTypes.string.isRequired,
}

export default AttorneysMember;
