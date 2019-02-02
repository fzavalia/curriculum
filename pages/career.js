import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";
import getInitialProps from "../utils/getInitialProps";
import Localization from "../utils/localization";

const Element = ({ image, name, dates, description }) => (
  <div style={{ display: "flex", width: "100%" }}>
    <div style={{ margin: "auto 0", width: 100, height: 100 }}>
      <img
        style={{
          height: "inherit",
          width: "inherit",
          objectFit: "cover",
          borderRadius: "50%"
        }}
        src={image}
      />
    </div>
    <div style={{ marginLeft: 20, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <span style={{ color: colors.text.default }}>{name}</span>
        <span style={{ color: colors.text.default }}>
          <i>{dates}</i>
        </span>
      </div>
      <Separator.Space amount={10} />
      <div
        style={{
          color: colors.text.default,
          textAlign: "justify",
          fontSize: 14
        }}
      >
        {description}
      </div>
    </div>
  </div>
);

const CareerPage = ({ pathname, localization }) => {
  Localization.set(localization);

  return (
    <Layout section="Career" pathname={pathname}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Separator.Space amount={60} />
        <Element
          image="/static/img/career/flowlike.jpg"
          name="Flowlike"
          dates={`01/02/18 - ${Localization.getString("career.present")}`}
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: Localization.getString("career.element.flowlike")
              }}
            />
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/etermax.png"
          name="Etermax"
          dates="01/02/17 - 01/06/18"
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: Localization.getString("career.element.etermax")
              }}
            />
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/mpforce.jpg"
          name="MP Force"
          dates="01/08/15 - 01/02/2017"
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: Localization.getString("career.element.mpforce")
              }}
            />
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/vostu.png"
          name="Vostu"
          dates="01/02/15 - 01/08/15"
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: Localization.getString("career.element.vostu")
              }}
            />
          }
        />
        <Separator.Space amount={40} />
      </div>
    </Layout>
  );
};

CareerPage.getInitialProps = getInitialProps;

export default CareerPage;
