import React from "react";
import Layout from "../components/Layout";

const TechPage = ({ pathname }) => {
  return <Layout section="Tech" pathname={pathname} />;
};

TechPage.getInitialProps = ({ pathname }) => ({ pathname });

export default TechPage;
