import React from "react";
import { avatars, images, conversations } from "../data/rightbarData.js";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  styled,
  Typography,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import Conversation from "./Conversation.jsx";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
function Rightbar({ theme }) {

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { mobile: "none", desktop: "block" },
      }}
    >
      <Box
        sx={(theme) => ({
          position: "sticky",
          top: 64,
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          pr: 1,

          scrollbarWidth: "thin",
          scrollbarColor: `${theme.palette.text.primary} transparent`,

          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.text.primary,
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default,
          },
        })}
        width={"100%"}
        marginTop={2}
        marginBottom={2}
      >
        <Typography variant={"h6"} fontWeight={200}>
          Amis En Ligne
        </Typography>

        <AvatarGroup
          max={7}
          sx={{ justifyContent: "left", paddingLeft: "10px" }}
        >
          {avatars.map((avatar, index) => (
            <StyledBadge
              key={index}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={avatar.alt} src={avatar.src} />
            </StyledBadge>
          ))}
        </AvatarGroup>

        <Typography variant={"h6"} fontWeight={200} marginTop={2}>
          Photos Récentes
        </Typography>
        <ImageList cols={3} rowHeight={200} gap={5}>
          {images.map((image) => (
            <ImageListItem key={image}>
              <img
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                alt="Post Image"
                loading="lazy"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant={"h6"} fontWeight={200} marginTop={2}>
          Conversations Récentes
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {conversations.map((conversation, index) => (
            <Conversation
              key={index}
              person={conversation.person}
              conversation={conversation.conversation}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
