import React from "react";
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
  const avatars = [
    { alt: "Dark Vador", src: "src/assets/images/Avatar/DarthVader.jpg" },
    {
      alt: "Joey Tribianni",
      src: "src/assets/images/Avatar/JoeyTribbiani.jpg",
    },
    { alt: "Michal Scott", src: "src/assets/images/Avatar/MichaelScott.jpg" },
    { alt: "Rick Sanchez", src: "src/assets/images/Avatar/RickSanchez.jpg" },
    { alt: "Walter White", src: "src/assets/images/Avatar/WalterWhite.jpg" },
    { alt: "Yoda", src: "src/assets/images/Avatar/Yoda.jpg" },
    { alt: "Tony Stark", src: "src/assets/images/Avatar/TonyStark.jpg" },
    { alt: "Neo", src: "src/assets/images/Avatar/Neo.jpg" },
    { alt: "Mario", src: "src/assets/images/Avatar/Mario.jpg" },
    { alt: "Peter Parker", src: "src/assets/images/Avatar/PeterParker.jpg" },
  ];

  const images = [
    "src/assets/images/gallery/doge_luxe.jpg",
    "src/assets/images/gallery/shifu.jpg",
    "src/assets/images/gallery/cat_meme.jpg",
    "src/assets/images/gallery/shocked_cat.jpg",
    "src/assets/images/gallery/dog_fire_meme.jpg",
    "src/assets/images/gallery/thumbs_up_cat.jpg",
    "src/assets/images/gallery/stand_up_cat.jpg",
    "src/assets/images/gallery/hamster_phone.jpg",
    "src/assets/images/gallery/crab_fish.jpg",
  ];

  const conversations = [
    {
      person: {
        username: "Peter Parker",
        avatar: "src/assets/images/Avatar/PeterParker.jpg",
      },
      conversation: {
        title: "Hey !",
        lastMessageUser: "Peter Parker: ",
        lastMessage:
          "Salut mec, si jamais tu croises une araignée ne la touche pas...",
      },
    },
    {
      person: {
        username: "Neo Anderson",
        avatar: "src/assets/images/Avatar/Neo.jpg",
      },
      conversation: {
        title: "Glitch dans la matrice",
        lastMessageUser: "Neo Anderson: ",
        lastMessage:
          "Salut… tu vois ce message ou c’est juste une simulation ? 🌀",
      },
    },
    {
      person: {
        username: "Tony Stark",
        avatar: "src/assets/images/Avatar/TonyStark.jpg",
      },
      conversation: {
        title: "Génie milliardaire",
        lastMessageUser: "Tony Stark: ",
        lastMessage:
          "N'appuie pas sur l'interrupteur en sortant, je l'ai rélié à un missile.",
      },
    },
    {
      person: {
        username: "Homer Simpson",
        avatar: "src/assets/images/Avatar/HomerSimpson.jpg",
      },
      conversation: {
        title: "Pause donuts",
        lastMessageUser: "Homer Simpson: ",
        lastMessage: "Marge...est-ce que tu m'as préparé mon donut ?",
      },
    },
    {
      person: {
        username: "Mario",
        avatar: "src/assets/images/Avatar/Mario.jpg",
      },
      conversation: {
        title: "Aventure perdue",
        lastMessageUser: "Mario: ",
        lastMessage: "Tu sais pas où est Peach ? Je l’ai encore perdue…",
      },
    },
    {
      person: {
        username: "Dark Vador",
        avatar: "src/assets/images/Avatar/DarthVader.jpg",
      },
      conversation: {
        title: "Révélation",
        lastMessageUser: "Dark Vador: ",
        lastMessage: "Je cherche mon fils...c'est toi ?",
      },
    },
    {
      person: {
        username: "Rick Sanchez",
        avatar: "src/assets/images/Avatar/RickSanchez.jpg",
      },
      conversation: {
        title: "Multivers",
        lastMessageUser: "Rick Sanchez: ",
        lastMessage:
          "Yo, j’ai essayé de t’envoyer ce message depuis un autre univers… ça marche ici aussi 😎",
      },
    },
    {
      person: {
        username: "Joey Tribbiani",
        avatar: "src/assets/images/Avatar/JoeyTribbiani.jpg",
      },
      conversation: {
        title: "Coincé Dinde",
        lastMessageUser: "Joey Tribbiani: ",
        lastMessage: "J'ai une dinde sur la tête, c'est dur pour écrire",
      },
    },
    {
      person: {
        username: "Gandalf The Grey",
        avatar: "src/assets/images/Avatar/Gandalf.jpg",
      },
      conversation: {
        title: "Comment t'as fait ?",
        lastMessageUser: "Gandalf The Grey: ",
        lastMessage: "Comment t'as fais pour passer ?",
      },
    },
  ];

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
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

        <AvatarGroup max={7}>
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
