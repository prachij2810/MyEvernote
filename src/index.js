import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase= require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDzOkffsk_GT1NM7AHPNVNQ1yzPNKveJZc",
  authDomain: "evernote-clone-8840f.firebaseapp.com",
  databaseURL: "https://evernote-clone-8840f.firebaseio.com",
  projectId: "evernote-clone-8840f",
  storageBucket: "evernote-clone-8840f.appspot.com",
  messagingSenderId: "634094383649",
  appId: "1:634094383649:web:395e88120d3c0d7aa6e960",
  measurementId: "G-9SZ3V76ZTC"
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
