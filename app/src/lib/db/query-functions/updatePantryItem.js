import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function updatePantryItem (id, updatedItem) {
    await updateDoc(doc(db, "pantryItems", id), updatedItem);
}
  