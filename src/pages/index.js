import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Features from '../components/features/feature';
import Attorneys from '../components/attorneys/attorneys';
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Legal Firm" keywords={[`Legal`, `firm`, `application`]} />
      <Hero />
      <About />
      <Features />
      <Attorneys />
    </Layout>
  )
}

export default IndexPage
