import { h, render } from "preact";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import App from "components/app.js";
import "./index.css";

let root;

const init = () => {
  root = render(<App />, document.body, root);
};

init();

if (module.hot) module.hot.accept("./components/app", init);

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/capsule/service-worker.js")
      .then(registration => {
        console.info("SW registered: ", registration);
        registration.addEventListener("updatefound", () => {
          registration.installing.addEventListener("statechange", () => {
            if (event.target.state === "installed") {
              if (registration.active) {
                Toastify({
                  text: "Update available. Reload now.",
                  duration: 30000,
                  gravity: "top",
                  position: "right",
                  className: {
                    color: "white"
                  },
                  backgroundColor:
                    "linear-gradient(to right, #34515e, #607d8b)",
                  onClick: () => location.reload()
                }).showToast();
              }
            }
          });
        });
      })
      .catch(registrationError => {
        console.error("SW registration failed: ", registrationError);
      });
  });
}
