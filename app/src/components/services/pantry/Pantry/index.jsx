import { Box, Typography } from "@mui/material";
import { AddPantryItemForm, ItemList } from "../../..";

export default function PantryItems() {
    // const items = useLoaderData().pantryItems;
    const items = [];

    return (
      items.length === 0 ? (
        <Typography
                    variant="h4"
                    color="text.primary"
                    textAlign="center"
                    fontWeight="bold"
                >
                  No Pantry Selected
        </Typography>
      ) : (
      <>
            <div>
            </div> <Box
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
            <AddPantryItemForm />
            <ItemList />
        </>
        )
    );
}