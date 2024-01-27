import { meta, shopify, starbucks, tesla, windev, hip } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Android Developer",
    company_name: "Windeliv",
    icon: windev,
    iconBg: "#65B741",
    date: "Nov 2015 - Nov 2016",
    points: [
      "Monitored the delivery application on the Android platform.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Modified and optimized map based on Google Map API to get an exact location in real time",
      "Customized notifications through the Firebase cloud to support users.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Hip Inc",
    icon: hip,
    iconBg: "#fbc3bc",
    date: "Dec 2016 - Apr 2017",
    points: [
      "Implemented and optimized a calendar with a new version, developed a feature allowing users to watch horoscopes and take a picture to customize the calendar background using Android Studio.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed  API endpoints using Java Gson and XMLpullparser. Managed a serverless database using SQLite.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed notifications push using OneSignal to get events from Google Calendar API",
      "Developed features that extracted permission through mobile devices allowing users automatically install and update applications to support people with disabilities",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "G-Talkie",
    description:
      "Developed a mobile application enabling users to transcribe their voice into composed emails in real time.",
    link: "https://github.com/QuanLew/GTalkie01.git",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Imprint Control",
    description:
      "Built a website empowering users to efficiently manage office printers and employees.",
    link: "https://github.com/QuanLew/cs157A.git",
  },
];
