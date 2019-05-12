import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonialItem from '../testimonials-item/testimonials';
import { StaticQuery, graphql } from "gatsby";
import styles from './testimonials.module.css';

const TestimonialsContainer = ({ data }) => {
  const { wrapper } = styles;
  const userOne = data.userOne.childImageSharp.fluid;
  const userTwo = data.userTwo.childImageSharp.fluid;
  const userThree = data.userThree.childImageSharp.fluid;
  return (
    <ScrollAnimation
      animateIn='slideInUp'
      className={wrapper}
      initiallyVisible={false}
      animateOnce={true}
    >
      <TestimonialItem
        image={userOne}
        text="“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”"
        author="- Mark Smith"
      />
      <TestimonialItem
        image={userTwo}
        text="“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”"
        author="-  Maya Jonson"
      />
      <TestimonialItem
        image={userThree}
        text="“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”"
        author="-  Steve Martin"
      />
    </ScrollAnimation>
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