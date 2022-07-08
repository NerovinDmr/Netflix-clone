import Firebase from 'firebase/compat/app'
    import 'firebase/compat/firestore'
    import 'firebase/compat/auth'
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCHfXj3fnogTsnJIkNHKnx9ioZbXV7N4Cw",
  authDomain: "netflix-clone-3037c.firebaseapp.com",
  databaseURL:"https://football-f559a.firebaseio.com",
  projectId: "netflix-clone-3037c",
  storageBucket: "netflix-clone-3037c.appspot.com",
  messagingSenderId: "673724786409",
  appId: "1:673724786409:web:e033822b7b4f8965ec3278"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
