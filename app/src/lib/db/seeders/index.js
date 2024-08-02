import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

// Example data
const user = {
  userId: "johndoe123", // This will be replaced by the Firebase Auth UID
  email: "john.doe@example.com",
  password: "password", // Add a password for user creation
  name: "John Doe",
  pantries: ["kitchenPantry1", "officeSnacks2"]
};

const pantries = [
  {
    pantryId: "kitchenPantry1",
    name: "Kitchen Pantry",
    items: ["milk1", "cereal2"]
  },
  {
    pantryId: "officeSnacks2",
    name: "Office Snacks",
    items: ["coffee3", "cookies4"]
  }
];

const items = [
  {
    itemId: "milk1",
    name: "Milk",
    quantity: 1,
    unit: "gallon",
    expiryDate: new Date(2024, 2, 15) // March 15, 2024
  },
  {
    itemId: "cereal2",
    name: "Cereal",
    quantity: 2,
    unit: "box"
  },
  {
    itemId: "coffee3",
    name: "Coffee",
    quantity: 1,
    unit: "bag"
  },
  {
    itemId: "cookies4",
    name: "Cookies",
    quantity: 5,
    unit: "pack"
  }
];

async function seedData() {
  const auth = getAuth();

  try {
    // Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    const authUser = userCredential.user;

    // Update user ID with the generated UID
    const updatedUser = { ...user, userId: authUser.uid };

    // Add user profile to Firestore
    await setDoc(doc(db, "Users", updatedUser.userId), updatedUser);

    // Add pantries
    for (const pantry of pantries) {
      const updatedPantry = { ...pantry, userId: updatedUser.userId };
      await setDoc(doc(db, "Pantries", pantry.pantryId), updatedPantry);

      // Add items
      const pantryItems = items.filter(item => updatedPantry.items.includes(item.itemId));
      for (const item of pantryItems) {
        const updatedItem = { ...item, pantryId: pantry.pantryId };
        await setDoc(doc(db, "Items", item.itemId), updatedItem);
      }
    }

    console.log("Data seeded successfully");
  } catch (e) {
    console.error("Error seeding data: ", e);
  }
}

export { seedData };
