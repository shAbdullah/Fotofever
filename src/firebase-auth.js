    import firebase from 'firebase';
     
    const firebaseConfig = {
        apiKey: "AIzaSyB5sTKrH-sgc97fb-ZpDhFFRFIREjruqr0",
        authDomain: "fproject-1a548.firebaseapp.com",
        databaseURL: "https://fproject-1a548.firebaseio.com",
        projectId: "fproject-1a548",
        storageBucket: "fproject-1a548.appspot.com",
        messagingSenderId: "808444504672",
        appId: "1:808444504672:web:eb678238a1e65311107105",
        measurementId: "G-8TBWMX84VP",
    };
     
    firebase.initializeApp(firebaseConfig);
     
    const auth = firebase.auth();
     
    export default {
        auth
    };