import React from "react";
import {
  AppBar,
  Box,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SearchIcon from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 1.8,
  backgroundColor: "white",
  padding: "4px 5px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));
function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack direction="row" spacing={1.5}>
          <EmojiEmotionsIcon sx={{ paddingTop: "3.5px" }} />
          <Typography
            variant={"h6"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            RiyadBook
          </Typography>
        </Stack>
        <SearchBar>
          <SearchIcon color="primary" />
          <InputBase placeholder="Recherche..." />
        </SearchBar>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
