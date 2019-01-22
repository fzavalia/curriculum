import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const CareerPage = ({ pathname }) => {
  return (
    <Layout section='Experience'>
      <Navbar pathname={pathname} />
    </Layout>
  );
};

CareerPage.getInitialProps = ({ pathname }) => ({ pathname });

export default CareerPage;
