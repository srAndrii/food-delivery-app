import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxGZrnErCc-Mlpfa079513qCreMP2wEtM",
  authDomain: "food-delivery-app-b0d0c.firebaseapp.com",
  databaseURL: "https://food-delivery-app-b0d0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-delivery-app-b0d0c",
  storageBucket: "food-delivery-app-b0d0c.appspot.com",
  messagingSenderId: "593007320972",
  appId: "1:593007320972:web:1428225422110dff4780a9"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
