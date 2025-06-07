interface ActionBtn {
  name: string;
  ico: string;
  col: string;
  href: string;
}

interface Skill {
  img: string;
  accent: string;
  name: string;
  desc: string;
}

type Project = {
  name: string;
  visit: string;
  source: string;
  tags: string[];
  desc: string;
};

interface WorkExperience {
  img: string;
  period: string;
  comp: string;
  desc: string;
  content: string[];
  url: string;
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
    col: "hov-blu",
    href: "https://drive.google.com/file/d/1zK52lg7qToDfBErgP12FLtdq0A83Ft8U/view?usp=sharing",
  },
  {
    name: "Contact",
    ico: "./images/call.svg",
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
  {
    head: "New VR from Meta?",
    desc: "Meta recently unveiled its latest innovation in augmented reality with the introduction of the Orion glasses, previously codenamed Project Nazare. These glasses are being touted as the most advanced AR glasses to date, designed ...",
    date: "November 2, 2024",
    tagN: "Education",
    tagC: "bg-green-500/20",
    tagI: "/images/book.svg",
  },
];

export const projHigh: Project[] = [
  {
    name: "Ukiyo Stays",
    desc: "Ukiyo Stays is a immersive villa rental service website where hosts can rent their properties and then book a stay with the host and is a real world full stack website.",
    visit: "https://ukiyostays.com/",
    source: "https://github.com/banao-tech/Ukiyo-FE",
    tags: ["Socket.io", "Express", "MonogoDB", "Tailwind"],
  },
  {
    name: "Nerd Circuit",
    desc: "Nerd Circuit is a personal blog where I share insights, tutorials, and thoughts on technology, programming, and personal projects—blending learning and creativity through a developer's lens.",
    visit: "https://nerd-circuit-official.vercel.app/",
    source: "https://github.com/AnimeshDev1999/nerd-circuit-official",
    tags: ["Shadcn", "MonogoDB", "NextJS"],
  },
  {
    name: "Minimize",
    desc: "Minimize is a server-side rendered URL shortening service that delivers fast, efficient link generation with clean redirects and minimal latency, offering a streamlined experience for users who need quick and reliable link management.",
    visit: "https://mak-minimize.onrender.com/",
    source: "https://github.com/AnimeshDev1999/Minimize",
    tags: ["Server Sider Rendering", "MonogoDB", "NodeJS", "ExpressJS"],
  },
  {
    name: "Equations",
    desc: "Equations is an equitable tourism platform designed to promote fair travel experiences. It connects travelers with local communities, ensuring responsible tourism that supports cultural preservation, local economies, and sustainable development.",
    visit: "https://www.equitabletourism.org/",
    source: "https://github.com/banao-tech/Equations_FE",
    tags: ["Redux", "Express", "MonogoDB", "React", "Tailwind"],
  },
];

export const workDat: WorkExperience[] = [
  {
    img: "/images/rk.webp",
    period: "Apr 2025 - Current",
    comp: "RegisterKaro",
    desc: "Front-end Web Developer",
    content: [
      "Working on performance improvements, bug fixes and UI/UX improvements.",
      "Working on SEO optimizations on client side.",
      "Making online tools for company website.",
    ],
    url: "https://www.registerkaro.in/",
  },
  {
    img: "/images/rk.webp",
    period: "Feb 2024 - Oct 2024",
    comp: "Banao Technologies",
    desc: "MERN Developer",
    content: [
      "Developed major frontend for 2 large scale websites with multiple routes.",
      "Implemented live chat with web sockets and chatbots.",
      "Worked on improving performance of the api and added missing api routes for multiple projects.",
    ],
    url: "https://banao.tech/",
  },
  {
    img: "/images/rk.webp",
    period: "May 2023 - Jan 2024",
    comp: "Across The Globe",
    desc: "MERN Developer",
    content: [
      "Developed major frontend for 3 large scale websites with multiple routes.",
      "Implemented api's for multiple different projects.",
      "Worked on improving and fixing several major and minor UI and functionality bugs across multiple projects.",
    ],
    url: "https://www.atg.world/",
  },
  {
    img: "/images/rk.webp",
    period: "Feb 2023 - May 2023",
    comp: "Wilman Infra Projects",
    desc: "ReactJS Developer",
    content: [
      "Developed major frontend for 4 medium scale websites with multiple screens.",
      "Did major research and data scraping for multiple projects.",
      "Created UI and functionality for multiple projects.",
    ],
    url: "https://www.linkedin.com/company/wilman-infra-projects-pvt-ltd/posts/?feedView=all",
  },
  {
    img: "/images/rk.webp",
    period: "Sep 2020 - Oct 2020",
    comp: "Artophilic",
    desc: "Graphic Designer & Web Developer",
    content: [
      "Developed frontend for 2 websites.",
      "Created 30+ unique designs for company merchandise.",
      "Did data entry and data scraping.",
    ],
    url: "https://www.linkedin.com/company/artophilic/",
  },
];

export const eduDat: WorkExperience[] = [
  {
    img: "/images/rk.webp",
    period: "May 2020 - Apr 2023",
    comp: "Babasaheb Bhimrao Ambedkar University (BBAU)",
    desc: "Master of Business Administration - MBA, Marketing",
    content: [],
    url: "https://www.bbau.ac.in/",
  },
  {
    img: "/images/rk.webp",
    period: "May 2017 - Apr 2020",
    comp: "Babasaheb Bhimrao Ambedkar University (BBAU)",
    desc: "Bachelor's degree, Business/Commerce, General",
    content: [],
    url: "https://www.bbau.ac.in/",
  },
  {
    img: "/images/rk.webp",
    period: "Apr 2016 - Mar 2017",
    comp: "Lucknow Public School (LPS)",
    desc: "Intermediate, Business/Commerce, General",
    content: [],
    url: "https://www.lucknowpublicschoolsandcolleges.com/",
  },
  {
    img: "/images/rk.webp",
    period: "Apr 2014 - Mar 2015",
    comp: "Lucknow Public School (LPS)",
    desc: "High School Diploma, Business/Commerce, General",
    content: [],
    url: "https://www.lucknowpublicschoolsandcolleges.com/",
  },
];

export const certDat: WorkExperience[] = [
  {
    img: "/images/rk.webp",
    period: "Issued May 2024",
    comp: "Udemy",
    desc: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    content: [],
    url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_aud-1738475842996:kwd-296956216253_._li_9151701_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pG6kW-Df5VtkUKEwphUj5zQwqHpTkZOjtq4RZP6gbRZkAFCuZs0v0aApBVEALw_wcB",
  },
  {
    img: "/images/rk.webp",
    period: "Issued Mar 2024",
    comp: "Udemy",
    desc: "The Git & Github Bootcamp",
    content: [],
    url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_aud-1738475842996:kwd-296956216253_._li_9151701_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pG6kW-Df5VtkUKEwphUj5zQwqHpTkZOjtq4RZP6gbRZkAFCuZs0v0aApBVEALw_wcB",
  },
  {
    img: "/images/rk.webp",
    period: "Issued May 2023",
    comp: "UT Computers",
    desc: "O Level (IT)",
    content: [],
    url: "https://www.utcomputer.com/",
  },
  {
    img: "/images/rk.webp",
    period: "Issued May 2023",
    comp: "Udemy",
    desc: "The Complete JavaScript Course 2023: From Zero to Expert!",
    content: [],
    url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_aud-1738475842996:kwd-296956216253_._li_9151701_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pG6kW-Df5VtkUKEwphUj5zQwqHpTkZOjtq4RZP6gbRZkAFCuZs0v0aApBVEALw_wcB",
  },
  {
    img: "/images/rk.webp",
    period: "Issued May 2022",
    comp: "UT Computers",
    desc: "Course on Computer Concepts (CCC)",
    content: [],
    url: "https://www.utcomputer.com/",
  },
  {
    img: "/images/rk.webp",
    period: "Issued Jul 2022",
    comp: "Udemy",
    desc: "Introduction to Programming Using Python",
    content: [],
    url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_aud-1738475842996:kwd-296956216253_._li_9151701_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pG6kW-Df5VtkUKEwphUj5zQwqHpTkZOjtq4RZP6gbRZkAFCuZs0v0aApBVEALw_wcB",
  },
  {
    img: "/images/rk.webp",
    period: "Issued Jun 2021",
    comp: "Free Code Camp",
    desc: "Responsive Web Design",
    content: [],
    url: "https://www.freecodecamp.org/",
  },
  {
    img: "/images/rk.webp",
    period: "Issued Nov 2021",
    comp: "Udemy",
    desc: "Responsive Web Design",
    content: [],
    url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_aud-1738475842996:kwd-296956216253_._li_9151701_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pG6kW-Df5VtkUKEwphUj5zQwqHpTkZOjtq4RZP6gbRZkAFCuZs0v0aApBVEALw_wcB",
  },
];
