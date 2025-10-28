import React from "react";
import { Box } from "@mui/material";
import Post from "./Post.jsx";
import posts from "../data/posts.js";

function Feed() {
  return (
    <Box flex={4} p={2}>
      {posts.map((post, index) => (
        <Post
          key={index}
          person={post.person}
          date={post.date}
          image={post.image}
          description={post.description}
        />
      ))}
    </Box>
  );
}

export default Feed;
