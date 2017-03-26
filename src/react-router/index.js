import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import {AppContainer} from 'react-hot-loader';

import App from "Containers/App";

const root = document.getElementById("root");

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  });
}
