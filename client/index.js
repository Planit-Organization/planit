import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import './styles.css';


render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
