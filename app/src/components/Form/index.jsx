import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { addPantyItem } from "../../lib/firebase";

const Form = ({ refreshItems }) => {
  const [item, setItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPantyItem({ name: item });
    setItem("");
    refreshItems();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="New Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        variant="outlined"
      />
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>
        Add Item
      </Button>
    </Box>
  );
};

export default Form;
