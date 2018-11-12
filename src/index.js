import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}