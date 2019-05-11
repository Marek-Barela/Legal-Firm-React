import React from 'react';
import Img from "gatsby-image";

const TestimonialsItem = props => {
  const { image } = props;
  return (
    <div>
      <Img fluid={image} />
    </div>
  )
}
export default TestimonialsItem