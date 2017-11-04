import { match } from 'react-router';

import routes from '../common/routes';
import configureStore from '../common/configureStore';
import template from './template';

export default (req, res) => {
  const store = configureStore();

  match({ location: req.url, routes }, (error, redirect, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      Promise.all([
        ...props.components
          .filter(component => component.fetchData)
          .map(fetchable => fetchable.fetchData(store.dispatch, props)),
      ]).then(() => res.send(template(store, props)));
    } else {
      res.status(404).send('Not found');
    }
  });
};
