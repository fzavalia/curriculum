import Head from "next/head";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";

const CustomHead = ({ section }) => (
  <Head>
    <title>{"Fernando Zavalia - " + section}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
  </Head>
);

const BGImage = () => (
  <React.Fragment>
    <div />
    <style jsx>{`
      div {
        position: fixed;
        background-image: url("/static/img/app/bg.jpg");
        filter: blur(8px);
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: scale(1.1);
      }
    `}</style>
  </React.Fragment>
);

const BGImageCover = () => (
  <React.Fragment>
    <div />
    <style jsx>{`
      div {
        position: fixed;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </React.Fragment>
);

const GlobalStyles = () => (
  <style jsx global>{`
    body,
    html {
      height: 100%;
      font-family: "Roboto", sans-serif;
      margin: 0;
    }
  `}</style>
);

const Content = ({ children }) => (
  <div style={{ position: "absolute", width: "100%", height: "100%" }}>
    {children}
  </div>
);

export default ({ section, children, pathname }) => (
  <React.Fragment>
    <CustomHead section={section} />
    <BGImage />
    <BGImageCover />
    <GlobalStyles />
    <Content>
      <Navbar pathname={pathname} />
      <FadeIn>{children}</FadeIn>
    </Content>
  </React.Fragment>
);
