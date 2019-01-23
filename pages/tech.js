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
      <img style={{ width: "100%", maxWidth: 100 }} src={image} />
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
      <Layout section="Tech" pathname={pathname}>
        <Separator.Space amount={60} />
        <Title value="Currently working with:" />
        <Separator.Space amount={40} />
        <div className="row">
          <Element image="/static/img/tech/js.png" name="JavaScript" />
          <Element image="/static/img/tech/react.png" name="React" />
          <Element image="/static/img/tech/node.png" name="Node" />
          <Element image="/static/img/tech/nextjs.png" name="NextJS" />
          <Element image="/static/img/tech/php.png" name="PHP" />
          <Element image="/static/img/tech/laravel.png" name="Laravel" />
          <Element image="/static/img/tech/lumen.png" name="Lumen" />
          <Element image="/static/img/tech/docker.png" name="Docker" />
          <Element image="/static/img/tech/aws.png" name="AWS" />
          <Element image="/static/img/tech/gitlab.png" name="Gitlab" />
          <Element image="/static/img/tech/mariadb.png" name="MariaDB" />
        </div>
        <Separator.Line amount={160} />
        <Title value="Experienced with:" />
        <Separator.Space amount={40} />
        <div className="row">
          <Element image="/static/img/tech/csharp.png" name="C#" />
          <Element image="/static/img/tech/unity.png" name="Unity" />
          <Element image="/static/img/tech/kotlin.svg" name="Kotlin" />
          <Element image="/static/img/tech/vertx.jpg" name="Vert.x" />
          <Element image="/static/img/tech/java.png" name="Java" />
          <Element image="/static/img/tech/ts.png" name="TypeScript" />
          <Element
            image="/static/img/tech/cocoscreator.png"
            name="Cocos Creator"
          />
          <Element image="/static/img/tech/express.png" name="Express" />
          <Element image="/static/img/tech/mongodb.png" name="MongoDB" />
        </div>
        <Separator.Space amount={60} />
      </Layout>
    </React.Fragment>
  );
};

TechPage.getInitialProps = ({ pathname }) => ({ pathname });

export default TechPage;
