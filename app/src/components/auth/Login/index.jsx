import { useEffect } from "react";
import { login } from "@lib/auth";
import {
  getAuth,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { redirect, Form, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser ?? null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) return redirect("/");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      return redirect("/");
    } else {
      return redirect("/auth/login");
    }
  });

  const handleSubmit = async ({ email, password }) => {
    const user = await login(email, password);
    if (user) {
      console.log("User Logged In");
      return redirect("/");
    }
    console.log("handleSUbmit did not login user");
    return redirect("/auth/login");
  };

  return (
    <div>
      <h1>Login</h1>
      <Form method="post" action="/auth/login">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </Form>
      <div>
        <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
}
