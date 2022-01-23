// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSqXMTa6CdhN3X0rNheuloU-wsnbtkORs",
  authDomain: "vue-trello-e8e7d.firebaseapp.com",
  databaseURL: "https://vue-trello-e8e7d-default-rtdb.firebaseio.com",
  projectId: "vue-trello-e8e7d",
  storageBucket: "vue-trello-e8e7d.appspot.com",
  messagingSenderId: "550403071042",
  appId: "1:550403071042:web:8c3c765f0049b187b021db",
};

/* const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp); */

//De momento es solo mas sencillo de implementar y consumir Database de Firebase como si fuera un JSON
export default firebaseConfig;
