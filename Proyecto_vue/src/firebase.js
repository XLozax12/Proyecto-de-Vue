import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBrVYwIobgJEol24mRuvss_YPzax4hlrow",
    authDomain: "proyecto-4707c.firebaseapp.com",
    projectId: "proyecto-4707c",
    storageBucket: "proyecto-4707c.appspot.com",
    messagingSenderId: "242124054378",
    appId: "1:242124054378:web:b069e1745e32c6fa5e0f13",
    measurementId: "G-EMPQSE1H1P"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp);

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')
