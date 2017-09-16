import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyA6tDkWiH1RMzOzZxZ3XIyKMvdNR-F_jI4",
    authDomain: "react-task-fdc21.firebaseapp.com",
    databaseURL: "https://react-task-fdc21.firebaseio.com",
    projectId: "react-task-fdc21",
    storageBucket: "react-task-fdc21.appspot.com",
    messagingSenderId: "1003547883784"
  };
var fire = firebase.initializeApp(config);
export default fire;