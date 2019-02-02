const express = require("express");
const next = require("next");
const loadLocalization = require("./static/localization/loadLocalization");

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();
const localization = loadLocalization();

nextApp.prepare().then(() => {
  const server = express();

  server.get("/localization", getlocalizationHandler);

  server.get("/", (_, res) => res.redirect("/about"));

  server.get("*", (req, res) => nextHandler(req, res));

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});

const getlocalizationHandler = (req, res) => {
  const lang = req.query.lang;
  res.send(localization[lang] || getDefaultLocalization());
};

const getDefaultLocalization = () => localization["en"];
