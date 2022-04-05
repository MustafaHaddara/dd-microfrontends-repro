import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const RUNNER_KEY = `app-b_runner`;
const DESTROYER_KEY = `app-b_destroyer`;

window[RUNNER_KEY] = (opts, targetElementId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(targetElementId)
  );
}

window[DESTROYER_KEY] = (opts, targetElementId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(targetElementId));
};
