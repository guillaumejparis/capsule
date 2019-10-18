import { h } from "preact";
import { Route, Router } from "wouter-preact";

import { makeUseBasepathLocation } from "routes/router";
import Home from "routes/home";
import Gallery from "routes/gallery";

const useBasepathLocation = makeUseBasepathLocation("/capsule");

const App = () => {
  return (
    <div id="app">
      <Router hook={useBasepathLocation}>
        <Route path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
      </Router>
    </div>
  );
};

export default App;
