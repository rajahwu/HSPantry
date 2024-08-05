// @lib/db/query-functions.js
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export async function getPantryItems(userId, pantryId) {
  if (!userId) {
    throw new Error("User ID is required");
  }
  if (!pantryId) {
    throw new Error("Pantry ID is required");
  }

  const items = [];
  const q = query(
    collection(db, "pantryItems"),
    where("pantryId", "==", pantryId),
    where("userId", "==", userId)  // Filter by userId
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}
