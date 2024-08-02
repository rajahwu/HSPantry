import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export async function addPantryItem (item) {
    await addDoc(collection(db, "pantryItems"), item);
}

  