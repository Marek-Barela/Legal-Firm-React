import React from "react";
import Layout from "../components/layout/layout";
import Error from '../components/error/error';
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error />
  </Layout>
)

export default NotFoundPage
