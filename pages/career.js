import React from "react";
import Layout from "../components/Layout";

const CareerPage = ({ pathname }) => {
  return <Layout section="Experience" pathname={pathname} />;
};

CareerPage.getInitialProps = ({ pathname }) => ({ pathname });

export default CareerPage;
