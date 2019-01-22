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
    <style jsx global>{`
      body, html {
        height: 100%;
        font-family: "Roboto", sans-serif;
        margin: 0;
      }
    `}</style>
    {children}
  </React.Fragment>
);
