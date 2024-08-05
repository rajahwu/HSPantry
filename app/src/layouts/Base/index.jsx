import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "@lib/auth/user";
import { SubMenu } from '@components/base';
import PropTypes from 'prop-types';
import { redirect } from "react-router-dom";

export default function BaseLayout({ children }) {
  const auth = getAuth();
  const user = auth.currentUser ?? null;
  
  console.log(user);
if(!user) return redirect("/auth/login");
  onAuthStateChanged(auth, (user) => {
    if (!user) return redirect("/auth/login");
  }) 
  
  return (
    // Container
    <div className="bg-blue-50 min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_3fr] gap-4">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 col-span-2">
        <h1 className="text-2xl font-bold">My App</h1>
        {user && <form>
        <button onClick={logout}>Sign Out</button>
        </form>}
      </header>
      {/* Main Page Content */}
      <main className="flex">
        <SubMenu />
        {/* SubMenu Content (app-router outlet) */}
        <section className="p-4 col-span-2">
          {children}
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4 col-span-2">
        <p>&copy; 2021</p>
      </footer>
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
