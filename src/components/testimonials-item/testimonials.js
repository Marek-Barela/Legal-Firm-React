import React from 'react';
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import styles from './testimonials.module.css';

const TestimonialsItem = props => {
  const { image, text, author } = props;
  const { wrapper, imageSize, paragraph } = styles;
  return (
    <div className={wrapper}>
      <Img fluid={image} className={imageSize} />
      <p className={paragraph}>
        {text}
      </p>
      <span>
        {author}
      </span>
    </div>
  )
}

TestimonialsItem.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default TestimonialsItem