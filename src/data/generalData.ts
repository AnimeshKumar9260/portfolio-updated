interface Social {
  name: string;
  ico: string;
  border: string;
  col: string;
  href: string;
}

export const socialsData: Social[] = [
  {
    name: "Mail",
    ico: "./images/mail.svg",
    border: "border-red-500/10",
    col: "hov-red",
    href: "mailto:animesh99dev@gmail.com",
  },
  {
    name: "Github",
    ico: "./images/github.svg",
    border: "border-purple-500/10",
    col: "hov-pur",
    href: "https://github.com/AnimeshDev1999",
  },
  {
    name: "Linkedin",
    ico: "./images/linkedin.svg",
    border: "border-blue-500/10",
    col: "hov-pur",
    href: "https://www.linkedin.com/in/animesh-kumar-b44685217/",
  },
];
