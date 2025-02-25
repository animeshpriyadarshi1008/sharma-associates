import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ReactGA from "react-ga";
ReactGA.initialize("UA-169429552-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
