import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export async function deletePantryItem (id) {
    await deleteDoc(doc(db, "pantryItems", id));
  }
  