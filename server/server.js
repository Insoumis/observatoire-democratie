/* eslint-disable no-console */
import Express from 'express';

import univervalMiddleware from './universalMiddleware';

const app = new Express();
const port = SSR_PORT;

app.use(Express.static('build'));

app.use((req, res) => univervalMiddleware(req, res));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
