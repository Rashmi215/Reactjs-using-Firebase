import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBr9mI9dV_VzWnrygMcozdZz-oIxKJQBbU",
  authDomain: "dragon-tales-project.firebaseapp.com",
  databaseURL: "https://dragon-tales-project.firebaseio.com",
  projectId: "dragon-tales-project",
  storageBucket: "dragon-tales-project.appspot.com",
  messagingSenderId: "452064070724"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;