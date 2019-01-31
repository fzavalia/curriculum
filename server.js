const express = require("express");
const next = require("next");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const yaml = require("js-yaml");

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();

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

const getlocalizationHandler = (req, res) =>
  recursivellyGetlocalization(req.query.langs, res);

const recursivellyGetlocalization = async (langs, res, index = 0) =>
  index >= langs.length
    ? res.send(await getDefaultLocalization())
    : handleLocalizationFileExistance(
        makeLocalizationFilePathFromLang(langs[index]),
        langs,
        res,
        index
      );

const handleLocalizationFileExistance = (
  localizationFilePath,
  langs,
  res,
  index
) =>
  fs.exists(localizationFilePath, async exists => {
    if (exists) {
      res.send(
        yaml.safeLoad(
          await fsp.readFile(localizationFilePath, { encoding: "utf8" })
        )
      );
    } else {
      recursivellyGetlocalization(langs, res, index + 1);
    }
  });

const getDefaultLocalization = async () =>
  yaml.safeLoad(
    await fsp.readFile(makeLocalizationFilePathFromLang("en"), {
      encoding: "utf8"
    })
  );

const makeLocalizationFilePathFromLang = lang =>
  path.join(__dirname, "static", "localization", lang + ".yml");
