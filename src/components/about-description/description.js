import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from './description.module.css';

const AboutDescription = props => {
  const { wrapper, imgColumn, textColumn } = styles;
  const { data } = props;
  const member = data.memberOne.childImageSharp.fluid;
  const signature = data.signature.childImageSharp.fixed;
  return (
    <div className={wrapper}>
      <div className={`${imgColumn} wow slideInLeft`} >
        <Img fluid={member} />
      </div>
      <div className={`${textColumn} wow slideInRight`}>
        <h2>About Our Firm</h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede do eiusmod tempor incididunt ut labore dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <p>
          Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida.
        </p>
        <Img fixed={signature} />
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          memberOne: file(relativePath: { eq: "team-4.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
            }
          }
          signature: file(relativePath: { eq: "signture.png" }) {
            childImageSharp {
              fixed(width: 105) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
    render={data => <AboutDescription data={data} {...props} />}
  />
)