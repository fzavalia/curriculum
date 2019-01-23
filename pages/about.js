import React from "react";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import Separator from "../components/Separator";

const Portrait = () => (
  <img
    style={{
      height: 250,
      width: 250,
      objectFit: "cover",
      boxShadow: "0 0 10px 0 #313131",
      borderRadius: "50%"
    }}
    src={"/static/img/about/portrait.jpg"}
  />
);

const Name = () => (
  <span
    style={{
      fontSize: 20,
      color: constants.colors.text.default
    }}
  >
    Fernando Alberto Zavalia Paunero
  </span>
);

const SmallDescription = () => (
  <span
    style={{
      fontSize: 14,
      color: constants.colors.text.default,
      textAlign: "center"
    }}
  >
    <i>
      "We build our computer (systems) the way we build our cities: over time,
      without a plan, on top of ruins."
    </i>{" "}
    - Ellen Ullman
  </span>
);

const LongDescription = () => (
  <div
    style={{
      fontSize: 14,
      color: constants.colors.text.default,
      textAlign: "justify"
    }}
  >
    <p>
      This is a recurring problem with most of the projects I have had the
      pleasure to work with. Feature after feature required by the client and
      not enough dicipline to speak up and foretold the technical debt that will
      eventually consume it and turn it into the aforementioned ruins.
    </p>
    <p>
      Guiding myself through the teachings of Robert C. Martin, I wish to make
      Clean Code and good coding practices a must in even small companies by
      showing developers and PMs the way to not having to maintain ruins
      anymore, but robust self maintained systems.
    </p>
  </div>
);

const AboutPage = ({ pathname }) => {
  return (
    <Layout section="About" pathname={pathname}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Separator.Space amount={60} />
        <Portrait />
        <Separator.Line amount={60} />
        <Name />
        <Separator.Space amount={20} />
        <SmallDescription />
        <Separator.Line amount={60} />
        <LongDescription />
        <Separator.Space amount={40} />
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = ({ pathname }) => ({ pathname });

export default AboutPage;
