import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAlgGDoE9CIfZPBp5X2gHIgm1uNOUqRFA',
  authDomain: 'revents-2f706.firebaseapp.com',
  databaseURL: 'https://revents-2f706.firebaseio.com',
  projectId: 'revents-2f706',
  storageBucket: 'revents-2f706.appspot.com',
  messagingSenderId: '218680116729'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

export default firebase;
