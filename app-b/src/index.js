import React from 'react';
import ReactDOM from 'react-dom';
import { datadogRum } from '@datadog/browser-rum';
import App from './App';

datadogRum.init({
  applicationId: '48e9ae22-1484-47b2-8c04-9a0eba9cde64',
  clientToken: 'pub272d2b3cad133fd24eecf58f8e7045cf',
  site: 'datadoghq.com',
  service:'mustafa-test-app-b',
  sampleRate: 100,
  trackInteractions: true
});

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
