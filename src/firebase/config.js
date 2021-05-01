import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

//  * Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyA5vJeulJgVtw6pU2yyaequxr5iJHFDWq8',
	authDomain: 'andriy-firegram.firebaseapp.com',
	projectId: 'andriy-firegram',
	storageBucket: 'andriy-firegram.appspot.com',
	messagingSenderId: '405091782709',
	appId: '1:405091782709:web:7a834ce65d7f0f21c1a17c'
};

// * Initialize Firebase
firebase.initializeApp(firebaseConfig);

// * Initialize the storage
const projectStorage = firebase.storage();
// * Initialize the DB
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
