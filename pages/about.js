import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";

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
      color: colors.text.default
    }}
  >
    Fernando Alberto Zavalia Paunero
  </span>
);

const SmallDescription = () => (
  <span
    style={{
      fontSize: 14,
      color: colors.text.default,
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
      fontSize: 16,
      color: colors.text.default,
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
    <p>
      Up until the moment I can really consider myself a referent of good code.
      I wish to continue learning from the best developers I can find.
    </p>
  </div>
);

const PersonalDataElement = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

const PersonalData = () => (
  <div style={{ color: colors.text.default, width: "100%" }}>
    <PersonalDataElement label="Birthday" value="26/10/93" />
    <Separator.Space amount={5} />
    <PersonalDataElement label="Marital Status" value="Single" />
    <Separator.Space amount={5} />
    <PersonalDataElement label="Nationality" value="Argentinian" />
    <Separator.Space amount={5} />
    <PersonalDataElement label="Email" value="zavaliafernando@gmail.com" />
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
        <Separator.Line amount={60} />
        <PersonalData />
        <Separator.Space amount={40} />
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = ({ pathname }) => ({ pathname });

export default AboutPage;
