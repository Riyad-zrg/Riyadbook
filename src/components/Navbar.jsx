import React from "react";
import {
  AppBar,
  Box,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
  display: "flex",
  gap: "20px",
  alignItems: "center",
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
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Avatar"
            src="https://media.licdn.com/dms/image/v2/D4E03AQHyxEVxYejbsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725607631430?e=2147483647&v=beta&t=z7BJKnTdQmBANNl3lik6dqXQXSg7JHIRfvWe4zSzeR8"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
