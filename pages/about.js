import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";
import getInitialProps from "../utils/getInitialProps";
import Localization from "../utils/Localization";

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
    <i>"Truth can only be found in one place: the code."</i> - Robert C. Martin,
    Clean Code: A Handbook of Agile Software
  </span>
);

const LongDescription = () => (
  <div
    style={{
      fontSize: 16,
      color: colors.text.default,
      textAlign: "justify"
    }}
    dangerouslySetInnerHTML={{__html: Localization.getString('about.long_description')}}
  />
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
    <PersonalDataElement label="Nationality" value="Argentinian" />
    <Separator.Space amount={5} />
    <PersonalDataElement label="Email" value="zavaliafernando@gmail.com" />
  </div>
);

const AboutPage = ({ pathname, localization }) => {
  return (
    <Layout section="About" pathname={pathname} localization={localization}>
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

AboutPage.getInitialProps = getInitialProps;

export default AboutPage;
