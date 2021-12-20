
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFGS56m9yUoaoCnVum918ZV4jaT5G0W18',
  authDomain: 'ids-todos.firebaseapp.com',
  databaseURL: 'https://ids-todos-default-rtdb.firebaseio.com',
  projectId: 'ids-todos',
  storageBucket: 'ids-todos.appspot.com',
  messagingSenderId: '306583621686',
  appId: '1:306583621686:web:3a6c0258ee29eff52e8897',
  measurementId: 'G-XPCJD08Q8E'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;