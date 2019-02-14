import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";
import getInitialProps from "../utils/getInitialProps";
import Localization from "../utils/localization";

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
  <h2
    style={{
      color: colors.text.default,
      margin: 0
    }}
  >
    Fernando Alberto Zavalia Paunero
  </h2>
);

const Profession = () => <p style={{ color: colors.text.default }}>{Localization.getString('about.profession')}</p>

const SmallDescription = () => (
  <span
    style={{
      fontSize: 14,
      color: colors.text.default,
      textAlign: "center"
    }}
    dangerouslySetInnerHTML={{
      __html: Localization.getString("about.small_description")
    }}
  />
);

const LongDescription = () => (
  <div
    style={{
      fontSize: 16,
      color: colors.text.default,
      textAlign: "justify"
    }}
    dangerouslySetInnerHTML={{
      __html: Localization.getString("about.long_description")
    }}
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
    <PersonalDataElement label={Localization.getString('about.birthday')} value="26/10/93" />
    <Separator.Space amount={5} />
    <PersonalDataElement label={Localization.getString('about.nationality')} value={Localization.getString('about.argentinian')} />
    <Separator.Space amount={5} />
    <PersonalDataElement label={Localization.getString('about.email')} value="zavaliafernando@gmail.com" />
  </div>
);

const AboutPage = ({ pathname, localization }) => {

  Localization.set(localization)

  return (
    <Layout section={Localization.getString('about.about')} pathname={pathname}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Separator.Space amount={60} />
        <Portrait />
        <Separator.Line amount={50} />
        <Name />
        <Profession />
        <SmallDescription />
        <Separator.Line amount={50} />
        <LongDescription />
        <Separator.Line amount={50} />
        <PersonalData />
        <Separator.Space amount={20} />
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = getInitialProps;

export default AboutPage;
