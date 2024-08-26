import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SearchField = ({ searchTerm, setSearchTerm }) => {
  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <TextField
      placeholder="Search"
      type="text"
      id="search"
      autoComplete="search"
      value={searchTerm}
      onChange={handleOnChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {searchTerm && (
              <IconButton edge="end" onClick={handleReset} aria-label="reset">
                <CloseOutlinedIcon />
              </IconButton>
            )}
            <IconButton edge="end" onClick={handleSearch} aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: 327,
        gap: 16,
        borderColor: "#E6E9EF",
        backgroundColor: "#FFFFFF",
        cursor: "pointer",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#d3d3d3",
          },
          "&:hover fieldset": {
            borderColor: "#a9a9a9",
          },
        },
      }}
    />
  );
};

export default SearchField;
