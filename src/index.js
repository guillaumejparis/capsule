import { h, render } from "preact";
import App from "components/app.js";
import "./index.css";

let root;

const init = () => {
  root = render(<App />, document.body, root);
};

init();

if (module.hot) module.hot.accept("./components/app", init);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/capsule/service-worker.js")
      .then(registration => {
        console.info("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.info("SW registration failed: ", registrationError);
      });
  });
}
