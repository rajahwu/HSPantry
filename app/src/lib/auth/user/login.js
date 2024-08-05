import { login } from "@lib/auth/user";
import { redirect } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";

const loginUser = async ({ email, password }) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted across page reloads
      })
      .catch((error) => {
        console.error(
          `Error setting auth persistence: ${error.code} - ${error.message}`,
        );
      });

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error logging in: ${errorCode} - ${errorMessage}`);
    return null;
  }
};

export default loginUser;
