import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const LogoLight = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-light.png" }) {
          childImageSharp {
            fixed(width: 105) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
);

export const LogoBlack = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-dark.png" }) {
          childImageSharp {
            fixed(width: 105) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
);
