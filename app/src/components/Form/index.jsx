import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { addPantryItem } from "../../lib/firebase";

const Form = ({ refreshItems }) => {
  const [item, setItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPantryItem({ name: item });
    setItem("");
    refreshItems();
  };

  Form.propTypes = {
  refreshItems: PropTypes.func.isRequired,
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
