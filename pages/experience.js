import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const ExperiencePage = ({ pathname }) => {
  return (
    <Layout section='Experience'>
      <Navbar pathname={pathname} />
    </Layout>
  );
};

ExperiencePage.getInitialProps = ({ pathname }) => ({ pathname });

export default ExperiencePage;
