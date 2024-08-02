import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginUser = async ({ email, password }) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error logging in: ${errorCode} - ${errorMessage}`);
    return null;
  }
};

export default loginUser;
