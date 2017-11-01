/* eslint-disable no-console */
import Express from 'express';

import template from './template';

const app = new Express();
const port = 3000;

app.use((req, res) => {
  res.send(template());
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
