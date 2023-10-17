import {
  linkedin,
  facebook,
  instagram,
  twitter,
  feet,
  currency,
  timer,
  stats1,
  fire,
  stats2,
  road,
  stats3,
  judge,
  stats4,
  people,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "career",
    title: "Career",
  },
  {
    id: "launch app",
    title: "Launch App",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const earningModel = [
  {
    id: "c-1",
    logo: feet,
  },
  {
    id: "cl-2",
    logo: currency,
  },
  {
    id: "cl-3",
    logo: timer,
  },
];

export const stats = [
  {
    id: "stats-1",
    content: "Calories burned",
    name: "Kcal",
    img: fire,
    imgContent: stats1,
  },
  {
    id: "stats-2",
    content: "Distance covered",
    name: "Meter(M)",
    img: road,
    imgContent: stats2,
  },
  {
    id: "stats-3",
    content: "Given kilogram",
    name: "Kilogram(KG)",
    img: judge,
    imgContent: stats3,
  },
  {
    id: "stats-4",
    content: "Total users",
    name: "Users",
    img: people,
    imgContent: stats4,
  },
];
