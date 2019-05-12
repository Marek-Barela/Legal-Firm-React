import React from 'react';
import Img from 'gatsby-image';
import MediaAnchor from '../anchor-media/anchor';
import Favicon from '../favicon/favicon';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { StaticQuery, graphql } from "gatsby";
import styles from './widget.module.css';

const Widget = ({ data }) => {
  const { wrapper, widgetContent, widgetContact, widgetParagraph, mediaWrapper, contactContainer } = styles;
  const logo = data.logo.childImageSharp.fixed;
  return (
    <div className={wrapper}>
      <div className={widgetContent}>
        <Img fixed={logo} />
        <p className={widgetParagraph}>
          Proin gravida nibh vel velit auctor aliquet anean lorem quis. bindum auctor, nisi elite conset ipsums sagtis id duis sed odio sit.
        </p>
        <div className={mediaWrapper}>
          <MediaAnchor url="https://www.facebook.com" ico={faFacebookF} />
          <MediaAnchor url="https://www.plus.google.com" ico={faGooglePlusG} />
          <MediaAnchor url="https://www.twitter.com" ico={faTwitter} />
          <MediaAnchor url="https://www.linkedin.com" ico={faLinkedinIn} />
        </div>
      </div>
      <div className={widgetContact}>
        <h4>Get In Touch</h4>
        <div className={contactContainer}>
          <Favicon icon={faMapMarkerAlt} />
          <p className={widgetParagraph}>
            1220 Petersham town, Wardll St New South Wales Australia PA 6550.
          </p>
        </div>
        <div className={contactContainer}>
          <Favicon icon={faPhone} />
          <p className={widgetParagraph}>
            (04) 491 570 110
          </p>
        </div>
        <div className={contactContainer}>
          <Favicon icon={faEnvelope} />
          <p className={widgetParagraph}>
            contact@legal.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          logo: file(relativePath: { eq: "logo-light.png" }) {
            childImageSharp {
              fixed(width: 105) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
    render={data => <Widget data={data} {...props} />}
  />
)