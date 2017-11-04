import React from 'react';
import Helmet from 'react-helmet';

const App = () => (
  <div>
    <Helmet titleTemplate="%s | RemixJobs">
      <title>Observatoire de la Démocratie</title>
      <meta name="description" content="" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    Hello World !
  </div>
);

export default App;
