importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyC-CXhhoTBUvU43NDSPPX4mWyDZ6O7n_bo',
  authDomain: 'bbanggrioven.firebaseapp.com',
  projectId: 'bbanggrioven',
  storageBucket: 'bbanggrioven.appspot.com',
  messagingSenderId: '191791280887',
  appId: '1:191791280887:web:0b52458a69f5adb53b59f2',
  measurementId: 'G-QY2FCSLG40'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
