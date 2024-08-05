import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Register</button>
            </form>
            <div>
                <Link to="/auth/login">Login</Link>
            </div>
        </div>
    )
}