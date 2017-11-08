import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

export default (store, props) => {
  const head = Helmet.rewind();
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>,
  );

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        ${head.title.toString()}
        ${head.meta.toString()}

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id='root'>${html}</div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="/client.bundle.js"></script>
        <script src="http://localhost:8080/target/target-script-min.js#anonymous"></script>
      </body>
    </html>
  `;
};
