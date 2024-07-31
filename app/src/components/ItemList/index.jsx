import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { deletePantryItem, getPantryItems } from "../../lib/firebase";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function ItemList() {
  const [items, setItems] = useState([]);
  let searchTerm = "";

  const refreshItems = async () => {
    const data = await getPantryItems();
    setItems(data || []);
  };

  useEffect(() => {
    refreshItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Stack>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Box
              key={item.id}
              sx={{ bgcolor: "#f3f3f3", fontSize: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", margin: "1rem 0" }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                {item.name}
              </Typography>
              <Button
                onClick={() => deletePantryItem(item.id).then(refreshItems)}
                text="Delete"
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6">
            No items found.
          </Typography>
        )}
      </Stack>
    </Box>
  );
}