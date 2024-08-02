import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const createUser = (email, password) => {
  const auth = getAuth();
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error creating user: ${errorCode} - ${errorMessage}`);
      return null;
    });
};

export default createUser;
