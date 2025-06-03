interface ActionBtn {
  name: string;
  ico: string;
  border: string;
  col: string;
  href: string;
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
