import { addPantryItem } from "@lib/db";
import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

export default function AddPantryItemForm({ refreshItems }) {
  const [item, setItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPantryItem({ name: item.name, quantity: item.quantity, category: item.category, expiration: item.expiration, imageUrl: item.image, notes: item.notes });
    setItem("");
    refreshItems();
  };

  AddPantryItemForm.propTypes = {
    refreshItems: PropTypes.func.isRequired,
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
      <Box className="flex">
        <div>
          <TextField
            label="name"
            value={item.name}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
          <TextField
            label="category"
            value={item.category}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
          <TextField
            label="expiration"
            value={item.expiration}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
        </div>
        <div>
          <TextField
            label="quantity"
            value={item.quantity}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
          <TextField
            label="notes"
            value={item.notes}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
          <TextField
            label="image"
            value={item.image}
            onChange={(e) => setItem(e.target.value)}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          />
        </div>

      </Box>
      <Button type="submit" variant="contained" sx={{}}>
        Add Item
      </Button>
    </Box>
  );
}