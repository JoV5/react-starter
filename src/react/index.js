import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import './index.css';

const root = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
