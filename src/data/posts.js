// Avatars
import AvatarPeterParker from "../assets/images/Avatar/PeterParker.jpg";
import AvatarNeo from "../assets/images/Avatar/Neo.jpg";
import AvatarTonyStark from "../assets/images/Avatar/TonyStark.jpg";
import AvatarHomerSimpson from "../assets/images/Avatar/HomerSimpson.jpg";
import AvatarMichaelScott from "../assets/images/Avatar/MichaelScott.jpg";
import AvatarMario from "../assets/images/Avatar/Mario.jpg";
import AvatarYoda from "../assets/images/Avatar/Yoda.jpg";
import AvatarDarthVader from "../assets/images/Avatar/DarthVader.jpg";
import AvatarRickSanchez from "../assets/images/Avatar/RickSanchez.jpg";
import AvatarJoeyTribbiani from "../assets/images/Avatar/JoeyTribbiani.jpg";
import AvatarGandalf from "../assets/images/Avatar/Gandalf.jpg";
import AvatarWalterWhite from "../assets/images/Avatar/WalterWhite.jpg";

// Posts
import PostGrandRex from "../assets/images/posts/post_image_grand_rex.jpg";
import PostNeo from "../assets/images/posts/Neo.gif";
import PostTonyStark from "../assets/images/posts/TonyStark.gif";
import PostDonutCode from "../assets/images/posts/post_image_donut_code.gif";
import PostMichaelScott from "../assets/images/posts/MichaelScott.gif";
import PostMarioJump from "../assets/images/posts/post_image_mario_jump.gif";
import PostYoda from "../assets/images/posts/Yoda.gif";
import PostDarthVader from "../assets/images/posts/DarthVader.gif";
import PostRickSanchez from "../assets/images/posts/RickSanchez.gif";
import PostJoeyTribbiani from "../assets/images/posts/JoeyTribbiani.gif";
import PostGandalf from "../assets/images/posts/Gandalf.gif";
import PostWalterWhite from "../assets/images/posts/WalterWhite.gif";

const posts = [
    {
        person: { username: "Peter Parker", avatar: AvatarPeterParker },
        date: "29 Mai 2024",
        image: PostGrandRex,
        description:
            "#ConcoursJeFilmeLeMétierQuiMePlait2024 #GrandRex Bravo à nos deux gagnants du Grand Prix Éducation !",
    },
    {
        person: { username: "Neo Anderson", avatar: AvatarNeo },
        date: "15 Mai 2024",
        image: PostNeo,
        description:
            "Quand ton code tourne enfin sans bug, mais que tu réalises que tu vis dans une simulation. #MatrixDebugMode",
    },
    {
        person: { username: "Tony Stark", avatar: AvatarTonyStark },
        date: "10 Mai 2024",
        image: PostTonyStark,
        description:
            "J’ai voulu tester un nouveau framework. Mon IA a compilé le monde. #Oops #FullStackOverflow",
    },
    {
        person: { username: "Homer Simpson", avatar: AvatarHomerSimpson },
        date: "1 Juin 2024",
        image: PostDonutCode,
        description:
            "Je ne fais pas d’erreurs, j’ajoute des fonctionnalités non documentées. 🍩 #DevLife",
    },
    {
        person: { username: "Michael Scott", avatar: AvatarMichaelScott },
        date: "22 Mai 2024",
        image: PostMichaelScott,
        description:
            "Quand VSCode crash avant de sauvegarder ton fichier. GOD, PLEASE NO!!! #TheOffice #SaveYourWork",
    },
    {
        person: { username: "Mario", avatar: AvatarMario },
        date: "5 Juin 2024",
        image: PostMarioJump,
        description:
            "J’ai sauté sur un bug, il a laissé tomber une pièce. 💰 #DebugMode #ItsMeMario",
    },
    {
        person: { username: "Maître Yoda", avatar: AvatarYoda },
        date: "12 Juin 2024",
        image: PostYoda,
        description:
            "Coder tu dois. Les tests, tu écriras. Les warnings, tu éviteras. #YodaBestDev #ForceDuCleanCode",
    },
    {
        person: { username: "Dark Vador", avatar: AvatarDarthVader },
        date: "20 Juin 2024",
        image: PostDarthVader,
        description:
            "J’ai senti une perturbation dans la prod... #DeployToTheDarkSide #IAmYourDev",
    },
    {
        person: { username: "Rick Sanchez", avatar: AvatarRickSanchez },
        date: "30 Juin 2024",
        image: PostRickSanchez,
        description:
            "J’ai fait un commit dans une autre dimension, il marche nickel là-bas. #WubbaLubbaDubDub",
    },
    {
        person: { username: "Joey Tribbiani", avatar: AvatarJoeyTribbiani },
        date: "7 Juillet 2024",
        image: PostJoeyTribbiani,
        description:
            "J’ai essayé de debugger… mais il y avait une dinde à côté. #JoeyDoesntShareFood #DevLife",
    },
    {
        person: { username: "Gandalf The Grey", avatar: AvatarGandalf },
        date: "15 Juillet 2024",
        image: PostGandalf,
        description:
            "Tu ne compileras... PAS ! (jusqu’à ce que tu relances npm install). #YouShallNotPass #JS",
    },
    {
        person: { username: "Walter White", avatar: AvatarWalterWhite },
        date: "22 Juillet 2024",
        image: PostWalterWhite,
        description:
            "J’ai optimisé le build. 99.1% de pure performance. #BreakingBuild #HeisenbergMode",
    },
];

export default posts;
