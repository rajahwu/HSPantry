import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { AddPantryItemForm, ItemList } from "../../components";
import { BaseLayout } from "../../layouts";
import { getPantryItems } from "../../lib/firebase";

const Home = () => {
  const [setItems] = useState([]);

  const refreshItems = async () => {
    const data = await getPantryItems();
    setItems(data || []);
  };
  return (
    <BaseLayout>
      <Box
        width="800px"
        height="100px"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="baseline"
        sx={{ bgcolor: "primary.main" }}
      >
        <Typography
          variant="h2"
          color="text.primary"
          textAlign="center"
          fontWeight="bold"
        >
          Pantry Items
        </Typography>
      </Box>
      <AddPantryItemForm refreshItems={refreshItems} />
      <ItemList />
    </BaseLayout>
  );
};

export default Home;
