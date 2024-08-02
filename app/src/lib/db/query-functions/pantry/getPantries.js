import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const getPantries = async (userId) => {
    try {
    
    const q = await query(collection(db, "Pantries"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const pantries = [];
    querySnapshot.forEach((doc) => {
        pantries.push(doc.data());
    });
    return pantries;
} catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error logging in: ${errorCode} - ${errorMessage}`);
    return null;
  }
}

export { getPantries };
