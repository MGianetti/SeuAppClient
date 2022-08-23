import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyCseO4dBJqHizvkJoeovnDqPnr2LTOStjw',
  authDomain: 'seuappdev.firebaseapp.com',
  projectId: 'seuappdev',
  storageBucket: 'seuappdev.appspot.com',
  messagingSenderId: '690517463436',
  appId: '1:690517463436:web:f18bfd9f74917cdd7246a9',
  measurementId: 'G-WPGCYPKXFJ',
});

// firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = getAuth(app);
export default app;
