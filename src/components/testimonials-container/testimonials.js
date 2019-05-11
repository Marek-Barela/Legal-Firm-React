import React from 'react';
import TestimonialItem from '../testimonials-item/testimonials';
import { StaticQuery, graphql } from "gatsby";
import styles from './testimonials.module.css';

const TestimonialsContainer = ({ data }) => {
  const { wrapper } = styles;
  const userOne = data.userOne.childImageSharp.fluid;
  const userTwo = data.userTwo.childImageSharp.fluid;
  const userThree = data.userThree.childImageSharp.fluid;
  return (
    <div className={wrapper}>
      <TestimonialItem
        image={userOne}
      />
      <TestimonialItem
        image={userTwo}
      />
      <TestimonialItem
        image={userThree}
      />
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          userOne: file(relativePath: { eq: "1.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          userTwo: file(relativePath: { eq: "2.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          userThree: file(relativePath: { eq: "3.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={data => <TestimonialsContainer data={data} {...props} />}
  />
)