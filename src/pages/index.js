import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Legal`, `firm`, `application`]} />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
