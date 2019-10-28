import { h } from "preact";
import { Route, Router } from "wouter-preact";

import { makeUseCapsuleLocation } from "routes/router";
import Home from "routes/home";
import Gallery from "routes/gallery";

const useCapsuleLocation = makeUseCapsuleLocation("/capsule", true);

const App = () => {
  return (
    <div id="app">
      <Router hook={useCapsuleLocation}>
        <Route path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
      </Router>
    </div>
  );
};

export default App;
