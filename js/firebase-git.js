/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyAge5avuZmgZHRXF0Wroy9EJuDC5H0BViE",
  authDomain: "projeto-ii-8a4d8.firebaseapp.com",
  projectId: "projeto-ii-8a4d8",
  storageBucket: "projeto-ii-8a4d8.appspot.com",
  messagingSenderId: "724772535353",
  appId: "1:724772535353:web:3fb24caf7a759129c3e1e8",
  measurementId: "G-J3NQ3PMQJF"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
