import firebaseConfig from './config/firestore-config.js';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
