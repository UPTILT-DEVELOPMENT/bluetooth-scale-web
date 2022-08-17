import { getFirestore, connectFirestoreEmulator, setDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

/* const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}; */

const firebaseConfig = {
    apiKey: "AIzaSyAFpN7X4ciTC7InHrT2GjItN_R3lybbzCI",
    authDomain: "scale-c4e84.firebaseapp.com",
    projectId: "scale-c4e84",
    storageBucket: "scale-c4e84.appspot.com",
    messagingSenderId: "1001730494380",
    appId: "1:1001730494380:web:b547e84c5a08afe642f409"
};

export const app = initializeApp(firebaseConfig)
/* export const auth = getAuth(app) */
export const db = getFirestore(app)

/* if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(db, 'localhost', 8080)
    // addTestData()
} */


export const addData = async (weight: any, type: any) => {
    const docRef = await addDoc(collection(db, "scales/LPE5uOyoDxncSHUDj434/data"), {
        type,
        weight,
        timestamp: Timestamp.now()
    });
} 