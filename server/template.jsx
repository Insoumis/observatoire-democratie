import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

import appleTouchIcon from './assets/apple-touch-icon.png';
import fav32 from './assets/favicon-32x32.png';
import fav16 from './assets/favicon-16x16.png';
import manifest from './assets/manifest.json';
import safariTab from './assets/safari-pinned-tab.svg';
import favicon from './assets/favicon.ico';
import browserConfig from './assets/browserconfig.xml';

export default (store, props) => {
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>,
  );
  const head = Helmet.renderStatic();

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        ${head.title.toString()}
        ${head.meta.toString()}

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css" />

        <link rel="apple-touch-icon" sizes="180x180" href="${appleTouchIcon}">
        <link rel="icon" type="image/png" sizes="32x32" href="${fav32}">
        <link rel="icon" type="image/png" sizes="16x16" href="${fav16}">
        <link rel="manifest" href="${manifest}">
        <link rel="mask-icon" href="${safariTab}" color="#213558">
        <link rel="shortcut icon" href="${favicon}">
        <meta name="msapplication-config" content="${browserConfig}">
        <meta name="theme-color" content="#213558">
      </head>
      <body>
        <div id='root'>${html}</div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
};
