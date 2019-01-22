import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const PortfolioPage = ({ pathname }) => {
  return (
    <Layout section='Portfolio'>
      <Navbar pathname={pathname} />
    </Layout>
  );
};

PortfolioPage.getInitialProps = ({ pathname }) => ({ pathname });

export default PortfolioPage;
