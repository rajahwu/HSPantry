// @actions/loginAction.js
import { login } from "@lib/auth/user";
import { redirect } from "react-router-dom";

export default async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");


  console.log(email, password);

  if (!email || !password) {
    console.error("Email or password missing");
    return null;
  }

  const user = await login({ email, password });

  if (user) {
    return redirect("/"); // Redirect after successful login
  } else {
    console.error("Failed to log in");
    return null;
  }
}
