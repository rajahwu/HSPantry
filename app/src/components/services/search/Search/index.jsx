import { TextField } from "@mui/material";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      label="Search Items"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      variant="outlined"
      sx={{ mt: 2 }}
    />
  );
};

export default Search;
