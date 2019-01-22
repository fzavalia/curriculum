import React from "react";
import Layout from "../components/Layout";

const PortfolioPage = ({ pathname }) => {
  return <Layout section="Portfolio" pathname={pathname} />;
};

PortfolioPage.getInitialProps = ({ pathname }) => ({ pathname });

export default PortfolioPage;
