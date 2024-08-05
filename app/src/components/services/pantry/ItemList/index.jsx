import { deletePantryItem } from "@lib/db";
import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function ItemList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (id) => {
    try {
      await deletePantryItem(id);
      // You may need to update the state here to reflect the deleted item
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Stack>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                bgcolor: "#f3f3f3",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                margin: "1rem 0",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Button
                onClick={() => handleDelete(item.id)}
                text="Delete"
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6">No items found.</Typography>
        )}
      </Stack>
    </Box>
  );
}
