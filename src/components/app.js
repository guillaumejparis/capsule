import { Route } from "wouter-preact";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Gallery from "../routes/gallery";

const App = () => {
  return (
    <div id="app">
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </div>
  );
};

export default App;
