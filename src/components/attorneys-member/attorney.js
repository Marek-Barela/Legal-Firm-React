import React from 'react';
import Img from "gatsby-image";
import MediaAnchor from '../anchor-media/anchor';
import PropTypes from 'prop-types';
import styles from './attorney.module.css';
import { faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AttorneysMember = props => {
  const { wrapper, layer } = styles;
  const { image, facebookUrl, googleUrl, twitterUrl, LinkedinUrl } = props;
  return (
    <div className={wrapper}>
      <Img fluid={image} />
      <div className={layer}>
        <MediaAnchor url={facebookUrl} ico={faFacebookF} />
        <MediaAnchor url={googleUrl} ico={faGooglePlusG} />
        <MediaAnchor url={twitterUrl} ico={faTwitter} />
        <MediaAnchor url={LinkedinUrl} ico={faLinkedinIn} />
      </div>
    </div>
  )
}

AttorneysMember.propTypes = {
  image: PropTypes.object.isRequired,
  facebookUrl: PropTypes.string.isRequired,
  googleUrl: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
  LinkedinUrl: PropTypes.string.isRequired,
}

export default AttorneysMember;
