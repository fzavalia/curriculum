import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const AboutPage = ({ pathname }) => {
  return (
    <Layout section="About">
      <Navbar pathname={pathname} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 80
        }}
      >
        <img
          style={{ height: 250, boxShadow: "0 0 5px 0 dimgrey" }}
          src={"/static/img/portrait.jpg"}
        />
        <span style={{ marginTop: 80, fontSize: 20 }}>Fernando Alberto Zavalia Paunero</span>
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = ({ pathname }) => ({ pathname });

export default AboutPage;
