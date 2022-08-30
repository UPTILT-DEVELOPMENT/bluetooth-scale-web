import { getFirestore, connectFirestoreEmulator, setDoc, doc, addDoc, collection, Timestamp, getDoc, query, getDocs, orderBy } from 'firebase/firestore'
import { getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

function initializeAppIfNecessary() {
    let fireapp;
    try {
        console.log('connecting')
        fireapp = getApp();
    } catch (any) {
        console.log('try connecting')
        fireapp = initializeApp(firebaseConfig);
    }
    return fireapp
}

export const app = initializeAppIfNecessary()
const db = getFirestore(app)


export const addData = async (weight: any, type: any) => {

    const docRef = await addDoc(collection(db, "scales/LPE5uOyoDxncSHUDj434/data"), {
        type,
        weight,
        timestamp: Timestamp.now()
    });
}

export const getData = async (wasteType?: string) => {
    const wasteData: any[] = []
    const tempData: any[] = []
    const q = query(collection(db, "scales/LPE5uOyoDxncSHUDj434/data"), orderBy('timestamp'))

    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
        const d = doc.data()

        const id = doc.id
        if (d.type === wasteType) {

            tempData.push(d)
            const convertedDate = new Date(d.timestamp.toDate())
            wasteData.push({
                weight: d.weight,
                date: convertedDate.toLocaleDateString('sv')
            })
        }
    });

    return wasteData
}