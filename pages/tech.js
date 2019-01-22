import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const TechPage = ({ pathname }) => {
  return (
    <Layout section='Tech'>
      <Navbar pathname={pathname} />
    </Layout>
  );
};

TechPage.getInitialProps = ({ pathname }) => ({ pathname });

export default TechPage;
