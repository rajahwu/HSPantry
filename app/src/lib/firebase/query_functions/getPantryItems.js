import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getPantryItems() {
  const items = [];
  try {
    const querySnapshot = await getDocs(collection(db, "pantryItems"));
    // console.log("querySnapshot", querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`pantry item: ${doc.id} => ${doc.data()}`);
      items.push( { id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}
