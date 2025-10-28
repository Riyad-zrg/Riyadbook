import DarthVaderAvatar from "../assets/images/Avatar/DarthVader.jpg";
import JoeyTribbianiAvatar from "../assets/images/Avatar/JoeyTribbiani.jpg";
import MichaelScottAvatar from "../assets/images/Avatar/MichaelScott.jpg";
import RickSanchezAvatar from "../assets/images/Avatar/RickSanchez.jpg";
import WalterWhiteAvatar from "../assets/images/Avatar/WalterWhite.jpg";
import YodaAvatar from "../assets/images/Avatar/Yoda.jpg";
import TonyStarkAvatar from "../assets/images/Avatar/TonyStark.jpg";
import NeoAvatar from "../assets/images/Avatar/Neo.jpg";
import MarioAvatar from "../assets/images/Avatar/Mario.jpg";
import PeterParkerAvatar from "../assets/images/Avatar/PeterParker.jpg";
import GandalfAvatar from "../assets/images/Avatar/Gandalf.jpg";
import HomerSimpsonAvatar from "../assets/images/Avatar/HomerSimpson.jpg";

// Avatars pour la section "Amis en ligne"
export const avatars = [
    { alt: "Dark Vador", src: DarthVaderAvatar },
    { alt: "Joey Tribianni", src: JoeyTribbianiAvatar },
    { alt: "Michael Scott", src: MichaelScottAvatar },
    { alt: "Rick Sanchez", src: RickSanchezAvatar },
    { alt: "Walter White", src: WalterWhiteAvatar },
    { alt: "Yoda", src: YodaAvatar },
    { alt: "Tony Stark", src: TonyStarkAvatar },
    { alt: "Neo", src: NeoAvatar },
    { alt: "Mario", src: MarioAvatar },
    { alt: "Peter Parker", src: PeterParkerAvatar },
];

// Images pour la section "Photos Récentes"
import DogeLuxe from "../assets/images/gallery/doge_luxe.jpg";
import Shifu from "../assets/images/gallery/shifu.jpg";
import CatMeme from "../assets/images/gallery/cat_meme.jpg";
import ShockedCat from "../assets/images/gallery/shocked_cat.jpg";
import DogFireMeme from "../assets/images/gallery/dog_fire_meme.jpg";
import ThumbsUpCat from "../assets/images/gallery/thumbs_up_cat.jpg";
import StandUpCat from "../assets/images/gallery/stand_up_cat.jpg";
import HamsterPhone from "../assets/images/gallery/hamster_phone.jpg";
import CrabFish from "../assets/images/gallery/crab_fish.jpg";

export const images = [
    DogeLuxe,
    Shifu,
    CatMeme,
    ShockedCat,
    DogFireMeme,
    ThumbsUpCat,
    StandUpCat,
    HamsterPhone,
    CrabFish,
];

// Conversations récentes
export const conversations = [
    {
        person: { username: "Peter Parker", avatar: PeterParkerAvatar },
        conversation: {
            title: "Hey !",
            lastMessageUser: "Peter Parker: ",
            lastMessage: "Salut mec, si jamais tu croises une araignée ne la touche pas...",
        },
    },
    {
        person: { username: "Neo Anderson", avatar: NeoAvatar },
        conversation: {
            title: "Glitch dans la matrice",
            lastMessageUser: "Neo Anderson: ",
            lastMessage: "Salut… tu vois ce message ou c’est juste une simulation ? 🌀",
        },
    },
    {
        person: { username: "Tony Stark", avatar: TonyStarkAvatar },
        conversation: {
            title: "Génie milliardaire",
            lastMessageUser: "Tony Stark: ",
            lastMessage: "N'appuie pas sur l'interrupteur en sortant, je l'ai rélié à un missile.",
        },
    },
    {
        person: { username: "Homer Simpson", avatar: HomerSimpsonAvatar },
        conversation: {
            title: "Pause donuts",
            lastMessageUser: "Homer Simpson: ",
            lastMessage: "Marge...est-ce que tu m'as préparé mon donut ?",
        },
    },
    {
        person: { username: "Mario", avatar: MarioAvatar },
        conversation: {
            title: "Aventure perdue",
            lastMessageUser: "Mario: ",
            lastMessage: "Tu sais pas où est Peach ? Je l’ai encore perdue…",
        },
    },
    {
        person: { username: "Dark Vador", avatar: DarthVaderAvatar },
        conversation: {
            title: "Révélation",
            lastMessageUser: "Dark Vador: ",
            lastMessage: "Je cherche mon fils...c'est toi ?",
        },
    },
    {
        person: { username: "Rick Sanchez", avatar: RickSanchezAvatar },
        conversation: {
            title: "Multivers",
            lastMessageUser: "Rick Sanchez: ",
            lastMessage: "Yo, j’ai essayé de t’envoyer ce message depuis un autre univers… ça marche ici aussi 😎",
        },
    },
    {
        person: { username: "Joey Tribbiani", avatar: JoeyTribbianiAvatar },
        conversation: {
            title: "Coincé Dinde",
            lastMessageUser: "Joey Tribbiani: ",
            lastMessage: "J'ai une dinde sur la tête, c'est dur pour écrire",
        },
    },
    {
        person: { username: "Gandalf The Grey", avatar: GandalfAvatar },
        conversation: {
            title: "Comment t'as fait ?",
            lastMessageUser: "Gandalf The Grey: ",
            lastMessage: "Comment t'as fais pour passer ?",
        },
    },
];
