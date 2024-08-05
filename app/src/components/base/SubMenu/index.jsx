import { getPantries } from '@lib/db/query-functions';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SubMenu() {
  const [user, setUser] = useState(null);
  const [pantries, setPantries] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPantries = async () => {
      if (user) {
        const pantriesData = await getPantries(user.uid);
        setPantries(pantriesData);
      }
    };

    fetchPantries();
  }, [user]);

  return (
    <aside className="bg-blue-200 p-4">
      <nav>
        <ul>
          {pantries && pantries.map(pantry => (

            <li key={pantry.pantryId}>
              <Link to={`/pantries/${pantry.pantryId}`}>
                {pantry.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
