import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "./components/App";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const sheet = new ServerStyleSheet();
    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      )
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(`
        <!doctype html>
        <html lang="fr">
        
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 

          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
          ${
            assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ""
          }
          ${sheet.getStyleTags()}

          ${
            process.env.NODE_ENV === "production"
              ? `
            <script src="${assets.client.js}" defer></script>`
              : `
            <script src="${assets.client.js}" defer crossorigin></script>`
          }
        </head>
        
        <body>
          <div id="root">${markup}</div>
        </body>
        
        </html>
      `);
    }
  });

export default server;
