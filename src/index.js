import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#020000"
    },
    secondary: {
      main: "#fbc936"
    }
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  rootElement
);
