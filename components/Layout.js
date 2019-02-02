import Head from "next/head";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import Separator from "./Separator";
import { GAHeadElement, PageView } from "../utils/ga";

const CustomHead = ({ section }) => (
  <Head>
    <title>{"Fernando Zavalia - " + section}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link rel="stylesheet" href="/static/css/flexboxgrid.min.css" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <GAHeadElement />
  </Head>
);

const BGImage = () => (
  <React.Fragment>
    <div />
    <style jsx>{`
      div {
        position: fixed;
        background-image: url("/static/img/app/bg.jpg");
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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

const navbarSize = 43;

export default ({ section, children, pathname }) => {
  return (
    <React.Fragment>
      <CustomHead section={section} />
      <PageView pathname={pathname} />
      <BGImage />
      <BGImageCover />
      <GlobalStyles />
      <Content>
        <Navbar pathname={pathname} />
        <Separator.Space amount={navbarSize} />
        <FadeIn>
          <div
            style={{
              height: `calc(100vh - ${navbarSize}px)`,
              overflowY: "auto"
            }}
          >
            <div style={{ width: "90%", maxWidth: 700, margin: "auto" }}>
              {children}
            </div>
          </div>
        </FadeIn>
      </Content>
    </React.Fragment>
  );
};
