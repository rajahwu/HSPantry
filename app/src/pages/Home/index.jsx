import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import Search from "../../components/Search";
import { deletePantyItem, getPantryItems } from "../../lib/firebase";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const refreshItems = async () => {
    try {
      const data = await getPantryItems();
      setItems(data || []); // Ensure items is always an array
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch pantry items:", error);
      setItems([]); // Optional: Set items to empty array in case of error
    }
  };

  useEffect(() => {
    refreshItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
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
          List of Items
        </Typography>
      </Box>
      <Form refreshItems={refreshItems} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Stack width="800px" height="300px" spacing={2} overflow="scroll">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Box
              key={item.id}
              width="100%"
              height="50px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "white", bgcolor: "text.primary", fontSize: "1rem" }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                textAlign="center"
                fontWeight="bold"
              >
                {item.name}
              </Typography>
              <Button
                onClick={() => deletePantyItem(item.id).then(refreshItems)}
                text="Delete"
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No items found.
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Home;
