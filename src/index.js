import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase= require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_URL",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_LINK",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_ID",
  measurementId: "YOUR_ID"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
