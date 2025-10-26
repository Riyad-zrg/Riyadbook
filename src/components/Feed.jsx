import React from "react";
import { Box } from "@mui/material";
import Post from "./Post.jsx";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        person={{
          username: "Peter Parker",
          avatar: "src/assets/images/Avatar/PeterParker.jpg",
        }}
        date={"29 Mai 2024"}
        image={"src/assets/images/posts/post_image_grand_rex.jpg"}
        description={
          "#ConcoursJeFilmeLeMétierQuiMePlait2024 #GrandRex Bravo à nos deux gagnants du Grand Prix Éducation !"
        }
      />
    </Box>
  );
}

export default Feed;
