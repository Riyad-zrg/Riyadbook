import React from "react";
import { Box } from "@mui/material";
import Post from "./Post.jsx";

const posts = [
  {
    person: {
      username: "Peter Parker",
      avatar: "src/assets/images/Avatar/PeterParker.jpg",
    },
    date: "29 Mai 2024",
    image: "src/assets/images/posts/post_image_grand_rex.jpg",
    description:
      "#ConcoursJeFilmeLeMétierQuiMePlait2024 #GrandRex Bravo à nos deux gagnants du Grand Prix Éducation !",
  },
  {
    person: {
      username: "Neo Anderson",
      avatar: "src/assets/images/Avatar/Neo.jpg",
    },
    date: "15 Mai 2024",
    image: "src/assets/images/posts/Neo.gif",
    description:
      "Quand ton code tourne enfin sans bug, mais que tu réalises que tu vis dans une simulation. #MatrixDebugMode",
  },
  {
    person: {
      username: "Tony Stark",
      avatar: "src/assets/images/Avatar/TonyStark.jpg",
    },
    date: "10 Mai 2024",
    image: "src/assets/images/posts/TonyStark.gif",
    description:
      "J’ai voulu tester un nouveau framework. Mon IA a compilé le monde. #Oops #FullStackOverflow",
  },

  {
    person: {
      username: "Homer Simpson",
      avatar: "src/assets/images/Avatar/HomerSimpson.jpg",
    },
    date: "1 Juin 2024",
    image: "src/assets/images/posts/post_image_donut_code.gif",
    description:
      "Je ne fais pas d’erreurs, j’ajoute des fonctionnalités non documentées. 🍩 #DevLife",
  },
  {
    person: {
      username: "Michael Scott",
      avatar: "src/assets/images/Avatar/MichaelScott.jpg",
    },
    date: "22 Mai 2024",
    image: "src/assets/images/posts/MichaelScott.gif",
    description:
      "Quand VSCode crash avant de sauvegarder ton fichier. GOD, PLEASE NO!!! #TheOffice #SaveYourWork",
  },
  {
    person: {
      username: "Mario",
      avatar: "src/assets/images/Avatar/Mario.jpg",
    },
    date: "5 Juin 2024",
    image: "src/assets/images/posts/post_image_mario_jump.gif",
    description:
      "J’ai sauté sur un bug, il a laissé tomber une pièce. 💰 #DebugMode #ItsMeMario",
  },
  {
    person: {
      username: "Maître Yoda",
      avatar: "src/assets/images/Avatar/Yoda.jpg",
    },
    date: "12 Juin 2024",
    image: "src/assets/images/posts/Yoda.gif",
    description:
      "Coder tu dois. Les tests, tu écriras. Les warnings, tu éviteras. #YodaBestDev #ForceDuCleanCode",
  },
  {
    person: {
      username: "Dark Vador",
      avatar: "src/assets/images/Avatar/DarthVader.jpg",
    },
    date: "20 Juin 2024",
    image: "src/assets/images/posts/DarthVader.gif",
    description:
      "J’ai senti une perturbation dans la prod... #DeployToTheDarkSide #IAmYourDev",
  },
  {
    person: {
      username: "Rick Sanchez",
      avatar: "src/assets/images/Avatar/RickSanchez.jpg",
    },
    date: "30 Juin 2024",
    image: "src/assets/images/posts/RickSanchez.gif",
    description:
      "J’ai fait un commit dans une autre dimension, il marche nickel là-bas. #WubbaLubbaDubDub",
  },
  {
    person: {
      username: "Joey Tribbiani",
      avatar: "src/assets/images/Avatar/JoeyTribbiani.jpg",
    },
    date: "7 Juillet 2024",
    image: "src/assets/images/posts/JoeyTribbiani.gif",
    description:
      "J’ai essayé de debugger… mais il y avait une dinde à côté. #JoeyDoesntShareFood #DevLife",
  },
  {
    person: {
      username: "Gandalf The Grey",
      avatar: "src/assets/images/Avatar/Gandalf.jpg",
    },
    date: "15 Juillet 2024",
    image: "src/assets/images/posts/Gandalf.gif",
    description:
      "Tu ne compileras... PAS ! (jusqu’à ce que tu relances npm install). #YouShallNotPass #JS",
  },
  {
    person: {
      username: "Walter White",
      avatar: "src/assets/images/Avatar/WalterWhite.jpg",
    },
    date: "22 Juillet 2024",
    image: "src/assets/images/posts/WalterWhite.gif",
    description:
      "J’ai optimisé le build. 99.1% de pure performance. #BreakingBuild #HeisenbergMode",
  },
];

function Feed() {
  return (
    <Box flex={4} p={2}>
      {posts.map((post, index) => (
        <Post
          key={index}
          person={post.person}
          date={post.date}
          image={post.image}
          imageAlt={post.imageAlt}
          description={post.description}
        />
      ))}
    </Box>
  );
}

export default Feed;
