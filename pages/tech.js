import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";
import Head from "next/head";

const Element = ({ image, name }) => (
  <div className="col-md-2 col-sm-6 col-xs-4">
    <div
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img
        style={{ width: "100%", maxWidth: 100, borderRadius: "50%" }}
        src={image}
      />
      <div
        style={{
          textAlign: "center",
          marginTop: 10,
          color: colors.text.default
        }}
      >
        {name}
      </div>
    </div>
  </div>
);

const Title = ({ value }) => (
  <div
    style={{
      color: colors.text.default,
      fontSize: 22,
      textAlign: "center"
    }}
  >
    {value}
  </div>
);

const TechPage = ({ pathname }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/static/css/flexboxgrid.min.css" />
      </Head>
      <Layout section="Tech" pathname={pathname}>
        <Separator.Space amount={100} />
        <Title value="Currently working with:" />
        <Separator.Space amount={20} />
        <div className="row">
          <Element image="/static/img/tech/js.png" name="JavaScript" />
          <Element image="/static/img/tech/js.png" name="React" />
          <Element image="/static/img/tech/js.png" name="Node" />
          <Element image="/static/img/tech/js.png" name="NextJS" />
          <Element image="/static/img/tech/js.png" name="PHP" />
          <Element image="/static/img/tech/js.png" name="Laravel" />
          <Element image="/static/img/tech/js.png" name="Lumen" />
          <Element image="/static/img/tech/js.png" name="Docker" />
          <Element image="/static/img/tech/js.png" name="AWS" />
          <Element image="/static/img/tech/js.png" name="Gitlab" />
          <Element image="/static/img/tech/js.png" name="MariaDB" />
        </div>
        <Separator.Line amount={80} />
        <Title value="Have experience with:" />
        <Separator.Space amount={20} />
        <div className="row">
          <Element image="/static/img/tech/js.png" name="C#" />
          <Element image="/static/img/tech/js.png" name="Unity" />
          <Element image="/static/img/tech/js.png" name="Kotlin" />
          <Element image="/static/img/tech/js.png" name="Vert.x" />
          <Element image="/static/img/tech/js.png" name="Java" />
          <Element image="/static/img/tech/js.png" name="TypeScript" />
          <Element image="/static/img/tech/js.png" name="Cocos Creator" />
          <Element image="/static/img/tech/js.png" name="Express" />
          <Element image="/static/img/tech/js.png" name="MongoDB" />
        </div>
      </Layout>
    </React.Fragment>
  );
};

TechPage.getInitialProps = ({ pathname }) => ({ pathname });

export default TechPage;
