import React from 'react';
import AttorneysMember from '../attorneys-member/attorney';
import { StaticQuery, graphql } from "gatsby";
import styles from './attorneys.module.css';

const Attorneys = props => {
  const { wrapper } = styles;
  const { data } = props;
  const memberOne = data.memberOne.childImageSharp.fluid;
  const memberTwo = data.memberTwo.childImageSharp.fluid;
  const memberThree = data.memberThree.childImageSharp.fluid;
  return (
    <div className={wrapper}>
      <AttorneysMember
        image={memberOne}
        facebookUrl="https://www.facebook.com"
        googleUrl="https://www.plus.google.com"
        twitterUrl="https://www.twitter.com"
        LinkedinUrl="https://www.linkedin.com"
      />
      <AttorneysMember
        image={memberTwo}
        facebookUrl="https://www.facebook.com"
        googleUrl="https://www.plus.google.com"
        twitterUrl="https://www.twitter.com"
        LinkedinUrl="https://www.linkedin.com"
      />
      <AttorneysMember
        image={memberThree}
        facebookUrl="https://www.facebook.com"
        googleUrl="https://www.plus.google.com"
        twitterUrl="https://www.twitter.com"
        LinkedinUrl="https://www.linkedin.com"
      />
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          memberOne: file(relativePath: { eq: "team-1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          memberTwo: file(relativePath: { eq: "team-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          memberThree: file(relativePath: { eq: "team-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={data => <Attorneys data={data} {...props} />}
  />
)