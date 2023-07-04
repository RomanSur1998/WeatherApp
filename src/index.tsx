import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Provider/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    //{" "}
  </Provider>
);
