/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { settings } from "../../../config";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY ?? settings.apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN ?? settings.authDomain,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID ?? settings.projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET ?? settings.storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID ?? settings.messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID ?? settings.appId,
};

// console.log("firebaseConfig", firebaseConfig);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addPantyItem = async (item) => {
  await addDoc(collection(db, "pantryItems"), item);
};

export const deletePantyItem = async (id) => {
  await deleteDoc(doc(db, "pantryItems", id));
};

export const updatePantyItem = async (id, updatedItem) => {
  await updateDoc(doc(db, "pantryItems", id), updatedItem);
};
