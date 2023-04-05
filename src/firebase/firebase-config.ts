// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJn5eZM7ZI3alu4LRYGC4TLQVh895S69g',
  authDomain: 'todoapp-85180.firebaseapp.com',
  databaseURL: 'https://todoapp-85180-default-rtdb.firebaseio.com',
  projectId: 'todoapp-85180',
  storageBucket: 'todoapp-85180.appspot.com',
  messagingSenderId: '691200089279',
  appId: '1:691200089279:web:be73f20b99fa2b7d25ba0a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
