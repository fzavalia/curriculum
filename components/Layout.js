import Head from "next/head";

export default ({ section, children }) => (
  <React.Fragment>
    <Head>
      <title>{"Fernando Zavalia - " + section}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    <div className="bg-image" />
    <style jsx>{`
      .bg-image {
        position: fixed;
        background-image: url("/static/img/bg.jpg");
        filter: blur(8px);
        -webkit-filter: blur(8px);
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: scale(1.1);
      }
    `}</style>
    <div className="bg-image-cover" />
    <style jsx>{`
      .bg-image-cover {
        position: fixed;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.3); /*can be anything, of course*/
      }
    `}</style>
    <style jsx global>{`
      body,
      html {
        height: 100%;
        font-family: "Roboto", sans-serif;
        margin: 0;
      }
    `}</style>
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {children}
    </div>
  </React.Fragment>
);
