const express = require("express");
const next = require("next");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {

  const server = express();

  server.get("/locale/:lang", getLocaleHandler);

  server.get("/", (_, res) => res.redirect("/about"));

  server.get("*", (req, res) => nextHandler(req, res));

  const port = process.env.PORT || 3000;

  server.listen(port, err => {

    if (err) throw err;
    
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const getLocaleHandler = (req, res) => {

  const lang = req.params["lang"]

  let localePath = makeLangPath(lang);

  fs.exists(localePath, async exists => {
    
    if (!exists) localePath = makeLangPath('en')

    const data = await fsp.readFile(localePath, { encoding: "utf8" });
    
    res.send(data);
  });
};

const makeLangPath = lang => path.join(__dirname, "static", "locale", lang + ".json")
