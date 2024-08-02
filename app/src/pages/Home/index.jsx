import loginUser from '@lib/auth/user/login';
import { getPantries } from '@lib/db/query-functions';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BaseLayout } from "../../layouts";

const Home = () => {
  const [pantries, setPantries] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginUserAsync = async () => {
      const user = await loginUser({ email: "john.doe@example.com", password: "password" });
      if (user) {
        console.log("User logged in");
        setUser(user);
      } else {
        console.log("User not logged in");
      }
    };

    loginUserAsync();
  }, []);

  useEffect(() => {
    const fetchPantries = async () => {
      if (user) {
        const pantries = await getPantries(user.uid);
        setPantries(pantries);
      }
    };

    fetchPantries();
  }, [user]);

  console.log({ user, pantries });

  return (
    <BaseLayout>
      <Box>
        <Typography variant="h4">Welcome, {user ? user.email : "Guest"}</Typography>
        <Typography variant="h6">Your Pantries:</Typography>
        <ul>
          {pantries && pantries.map(pantry => (
            <li key={pantry.pantryId}>{pantry.name}</li>
          ))}
        </ul>
      </Box>
      <Outlet />
    </BaseLayout>
  );
};

export default Home;
