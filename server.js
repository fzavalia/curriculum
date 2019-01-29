const express = require("express");
const next = require("next");

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  
  const server = express();

  server.get("/", (_, res) => res.redirect("/about"));

  server.get("*", (req, res) => nextHandler(req, res));

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
