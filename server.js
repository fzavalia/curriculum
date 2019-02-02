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
  const langs = req.query.langs.split(",");
  res.send(recursivellyGetLanglocalization(langs, res));
};

const recursivellyGetLanglocalization = (langs, res, index = 0) =>
  index >= langs.length
    ? getDefaultLocalization()
    : handleLocalizationLangExistence(langs, res, index);

const handleLocalizationLangExistence = (langs, res, index) =>
  localization[langs[index]] ||
  recursivellyGetLanglocalization(langs, res, index + 1);

const getDefaultLocalization = () => localization["en"];
