import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";

const AboutPage = ({ pathname }) => {
  return (
    <Layout section="About">
      <Navbar pathname={pathname} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img
          style={{
            height: 250,
            width: 250,
            objectFit: "cover",
            boxShadow: "0 0 10px 0 #313131",
            margin: "80px 0 40px 0",
            borderRadius: "50%"
          }}
          src={"/static/img/portrait.jpeg"}
        />
        <span
          style={{
            fontSize: 20,
            color: constants.colors.text.default,
            marginBottom: 20
          }}
        >
          Fernando Alberto Zavalia Paunero
        </span>
        <span
          style={{
            fontSize: 14,
            color: constants.colors.text.default,
            marginBottom: 40
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum,
          massa at iaculis posuere
        </span>
        <span
          style={{
            fontSize: 14,
            color: constants.colors.text.default,
            width: "80%"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum,
          massa at iaculis posuere, nunc quam rutrum libero, vulputate tristique
          leo odio sed lorem. Ut sit amet nisi et lorem accumsan sagittis sed at
          nulla. Integer malesuada lacinia est non rhoncus. Duis ut ultrices
          magna. Integer eget ultrices tellus. Morbi porta facilisis quam, vitae
          vestibulum mauris dapibus sed. Curabitur suscipit orci vel quam
          iaculis convallis. Suspendisse erat turpis, ultricies et est sit amet,
          rutrum elementum nunc. Etiam pellentesque facilisis massa, id
          consequat ante ornare et. Integer tempor scelerisque ante, et ultrices
          orci maximus ac. Suspendisse sit amet tincidunt augue. Proin venenatis
          lobortis ultrices. Nulla risus orci, bibendum sagittis porttitor ut,
          sodales ac neque. In ac arcu ac metus tincidunt convallis nec sit amet
          diam. Aenean efficitur efficitur venenatis. Sed in euismod velit. Duis
          bibendum tortor turpis, elementum rutrum nunc facilisis et.
        </span>
      </div>
    </Layout>
  );
};

AboutPage.getInitialProps = ({ pathname }) => ({ pathname });

export default AboutPage;
