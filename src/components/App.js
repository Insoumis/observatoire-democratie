import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "normalize.css";

import "../styles.css";

import Header from "./header/Header";

const Home = () => <div>Hello this is home !</div>;

const Test = () => <div>Testing the router ?</div>;

const App = () => {
  return (
    <Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Fragment>
  );
};

export default App;
