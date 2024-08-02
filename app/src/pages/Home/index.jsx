// import { Box, Typography } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { BaseLayout } from "../../layouts";

const Home = () => {
  return (
    <BaseLayout>
     <Outlet />
    </BaseLayout>
  );
};

export default Home;
