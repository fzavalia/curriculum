import React from "react";
import Layout from "../components/Layout";
import Sep from "../components/Sep";
import * as constants from "../utils/constants";

const SeparatingLine = () => (
  <React.Fragment>
    <Sep amount={20} />
    <div
      style={{
        height: 1,
        width: "90%",
        maxWidth: 700,
        backgroundImage:
          "linear-gradient(to right, #00000000, white, #00000000)"
      }}
    />
    <Sep amount={20} />
  </React.Fragment>
);

const Element = ({ image, name, dates, description }) => (
  <div style={{ width: "90%", maxWidth: 700, display: "flex" }}>
    <img src={image} />
    <style jsx>{`
      img {
        margin: auto 0;
        max-height: 100px;
        max-width: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
    `}</style>
    <div style={{ marginLeft: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <span style={{ color: constants.colors.text.default }}>{name}</span>
        <span style={{ color: constants.colors.text.default }}>
          <i>{dates}</i>
        </span>
      </div>
      <p
        style={{
          color: constants.colors.text.default,
          textAlign: "justify",
          fontSize: 14
        }}
      >
        {description}
      </p>
    </div>
  </div>
);

const CareerPage = ({ pathname }) => {
  return (
    <Layout section="Experience" pathname={pathname}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Sep amount={60} />
        <Element
          image="/static/img/etermax.png"
          name="Etermax"
          dates="20/10/93 - Today"
          description="Suspendisse est
              erat, porttitor sit amet ipsum eu, posuere lobortis justo. Fusce
              bibendum lacinia nisi, quis interdum leo placerat quis. Aenean ut
              vehicula arcu, ac faucibus mauris."
        />
        <SeparatingLine />
        <Element
          image="/static/img/etermax.png"
          name="Etermax"
          dates="20/10/93 - Today"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              venenatis auctor diam eu placerat."
        />
        <SeparatingLine />
        <Element
          image="/static/img/etermax.png"
          name="Etermax"
          dates="20/10/93 - Today"
          description="Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Suspendisse est
              erat, porttitor sit amet ipsum eu, posuere lobortis justo. Fusce
              bibendum lacinia nisi, quis interdum leo placerat quis. Aenean ut
              vehicula arcu, ac faucibus mauris."
        />
        <SeparatingLine />
        <Element
          image="/static/img/etermax.png"
          name="Etermax"
          dates="20/10/93 - Today"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              venenatis auctor diam eu placerat. Maecenas vehicula hendrerit
              ante non faucibus. In nisi dui, rutrum sed ipsum sed, ullamcorper
              volutpat purus. Nunc libero ante, posuere sed aliquet vitae,
              porttitor feugiat odio."
        />
        <Sep amount={40} />
      </div>
    </Layout>
  );
};

CareerPage.getInitialProps = ({ pathname }) => ({ pathname });

export default CareerPage;
