import { getAuth, signOut } from "firebase/auth";

const logoutUser = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.info("User signed out");
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error creating user: ${errorCode} - ${errorMessage}`);
      return null;
    });
};

export default logoutUser;
