    import firebase from 'firebase';
     
      const firebaseConfig = {
     apiKey: "AIzaSyAxkcCgkSFPfl8oCjXHkF_sE1EbCWuC3Mc",
  authDomain: "photographs-8aa73.firebaseapp.com",
  databaseURL: "https://photographs-8aa73.firebaseio.com",
  projectId: "photographs-8aa73",
  storageBucket: "photographs-8aa73.appspot.com",
  messagingSenderId: "66782567826",
  appId: "1:66782567826:web:a22c3321da0b03f0c7b54b",
  measurementId: "G-EJ520M1PXV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
    const auth = firebase.auth();
     
    export default {
        auth
    };