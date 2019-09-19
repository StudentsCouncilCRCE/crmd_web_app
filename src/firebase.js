import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBNdIWP-hQGrgHdfkjvc0NksCfiEqeHFlg',
  authDomain: 'crcecrmd2019.firebaseapp.com',
  databaseURL: 'https://crcecrmd2019.firebaseio.com',
  projectId: 'crcecrmd2019',
  appId: '1:547005552563:web:702025a460387f65',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

const scores = db.collection('scores');

export { db, auth, currentUser, scores };
