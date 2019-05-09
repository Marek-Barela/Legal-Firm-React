import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Legal`, `firm`, `application`]} />
    <h1>Legal Firm</h1>
  </Layout>
)

export default IndexPage
