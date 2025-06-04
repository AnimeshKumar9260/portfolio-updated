interface ActionBtn {
  name: string;
  ico: string;
  border: string;
  col: string;
  href: string;
}

interface Skill {
  img: string;
  accent: string;
  name: string;
  desc: string;
}

interface Blog {
  img?: string;
  head: string;
  desc: string;
  date: string;
  tagN: string;
  tagC: string;
  tagI: string;
  content?: { title?: string; para?: string }[];
}

export const actBtnData: ActionBtn[] = [
  {
    name: "Resume",
    ico: "./images/document.svg",
    border: "border-sky-500/10",
    col: "hov-blu",
    href: "https://drive.google.com/file/d/1zK52lg7qToDfBErgP12FLtdq0A83Ft8U/view?usp=sharing",
  },
  {
    name: "Contact",
    ico: "./images/call.svg",
    border: "border-green-500/10",
    col: "hov-grn",
    href: "tel:+919260998607",
  },
];

export const skillsDat: Skill[] = [
  {
    img: "./images/react.svg",
    accent: "bg-sky-500/20",
    name: "React",
    desc: "Javascript Library",
  },
  {
    img: "./images/nextJs.svg",
    accent: "bg-slate-200/40",
    name: "Next",
    desc: "Javascript Framework",
  },
  {
    img: "./images/mongo.svg",
    accent: "bg-green-300/20",
    name: "MongoDB",
    desc: "Non-relational DBMS",
  },
  {
    img: "./images/express.svg",
    accent: "bg-slate-200/40",
    name: "Express",
    desc: "Node Framework",
  },
  {
    img: "./images/node.svg",
    accent: "bg-green-300/20",
    name: "Node",
    desc: "Js Runtime Env",
  },
  {
    img: "./images/tailwind.svg",
    accent: "bg-sky-500/20",
    name: "Tailwind",
    desc: "CSS Framework",
  },
  {
    img: "./images/typescript.svg",
    accent: "bg-sky-500/20",
    name: "Typescript",
    desc: "Types for Javascript",
  },
  {
    img: "./images/redux.svg",
    accent: "bg-purple-600/20",
    name: "Redux",
    desc: "JavaScript Library",
  },
  {
    img: "./images/scss.svg",
    accent: "bg-fuchsia-600/20",
    name: "SCSS",
    desc: "CSS preprocessor",
  },
];

export const blogData1: Blog[] = [
  {
    head: "Apple Intelligence is finally here!",
    desc: "In 2023, Apple unveiled its latest development in artificial intelligence: Apple Intelligence. Building on the company’s core principles of privacy, ease of use, and performance, Apple Intelligence represents ...",
    date: "November 3, 2024",
    tagN: "Education",
    tagC: "bg-green-500/20",
    tagI: "/images/book.svg",
  },
  {
    head: "New VR from Meta?",
    desc: "Meta recently unveiled its latest innovation in augmented reality with the introduction of the Orion glasses, previously codenamed Project Nazare. These glasses are being touted as the most advanced AR glasses to date, designed ...",
    date: "November 2, 2024",
    tagN: "Education",
    tagC: "bg-green-500/20",
    tagI: "/images/book.svg",
  },
];
