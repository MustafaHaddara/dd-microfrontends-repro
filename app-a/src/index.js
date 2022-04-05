import React from 'react';
import ReactDOM from 'react-dom';
import { datadogRum } from '@datadog/browser-rum';
import App from './App';

datadogRum.init({
  applicationId: '58ba5b56-bd28-4925-b4a8-a859ef8f933e',
  clientToken: 'pub7dc1dbfb0e790a3fc1c01d4b2858f54b',
  site: 'datadoghq.com',
  service:'mustafa-test-app-a',
  sampleRate: 100,
  trackInteractions: true
});

const RUNNER_KEY = `app-a_runner`;
const DESTROYER_KEY = `app-a_destroyer`;

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
