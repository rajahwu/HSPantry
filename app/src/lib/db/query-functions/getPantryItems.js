import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getPantryItems() {
  const items = [];
    const querySnapshot = await getDocs(collection(db, "pantryItems"));
    querySnapshot.forEach((doc) => {
      items.push( { id: doc.id, ...doc.data() });
    });
    return items;
}
