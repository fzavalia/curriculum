import React from "react";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import Sep from "../components/Sep";

const Portrait = () => (
  <img
    style={{
      height: 250,
      width: 250,
      objectFit: "cover",
      boxShadow: "0 0 10px 0 #313131",
      borderRadius: "50%"
    }}
    src={"/static/img/portrait.jpg"}
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
      width: "80%",
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
  <span
    style={{
      fontSize: 14,
      color: constants.colors.text.default,
      width: "80%",
      textAlign: "justify"
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum, massa
    at iaculis posuere, nunc quam rutrum libero, vulputate tristique leo odio
    sed lorem. Ut sit amet nisi et lorem accumsan sagittis sed at nulla. Integer
    malesuada lacinia est non rhoncus. Duis ut ultrices magna. Integer eget
    ultrices tellus. Morbi porta facilisis quam, vitae vestibulum mauris dapibus
    sed. Curabitur suscipit orci vel quam iaculis convallis. Suspendisse erat
    turpis, ultricies et est sit amet, rutrum elementum nunc. Etiam pellentesque
    facilisis massa, id consequat ante ornare et. Integer tempor scelerisque
    ante, et ultrices orci maximus ac. Suspendisse sit amet tincidunt augue.
    Proin venenatis lobortis ultrices. Nulla risus orci, bibendum sagittis
    porttitor ut, sodales ac neque. In ac arcu ac metus tincidunt convallis nec
    sit amet diam. Aenean efficitur efficitur venenatis. Sed in euismod velit.
    Duis bibendum tortor turpis, elementum rutrum nunc facilisis et.
  </span>
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
        <Sep amount={60} />
        <Portrait />
        <Sep amount={40} />
        <Name />
        <Sep amount={20} />
        <SmallDescription />
        <Sep amount={40} />
        <LongDescription />
        <Sep amount={40} />
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = ({ pathname }) => ({ pathname });

export default AboutPage;
