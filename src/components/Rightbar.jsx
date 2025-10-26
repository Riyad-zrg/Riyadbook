import React from "react";
import { Avatar, AvatarGroup, Box, styled, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";

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

function Rightbar() {
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

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position={"fixed"}>
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
      </Box>
    </Box>
  );
}

export default Rightbar;
