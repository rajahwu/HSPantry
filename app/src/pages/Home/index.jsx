import loginUser from '@lib/auth/user/login';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BaseLayout } from "../../layouts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null);
      return redirect("/auth/login")
    }
  })

  return (
    <BaseLayout>
      <Box>
        <Typography variant="h4">Welcome, {user ? user.email : "Guest"}</Typography>
      </Box>
      <Outlet />
    </BaseLayout>
  );
};

export default Home;
