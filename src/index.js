import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js', { scope: './ ' })
    .then((reg) => {
      console.log('[SW] Registered')
    })
    .catch((err) => {
      console.log('[SW] Failed to register', err)
    });
}