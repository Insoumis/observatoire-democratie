import React from 'react';
import { renderToString } from 'react-dom/server';

import App from 'components/App';

export default () => {
  const html = renderToString(<App />);

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id='root'>${html}</div>

        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
};
