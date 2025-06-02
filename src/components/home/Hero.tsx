import Image from "next/image";
import ActionBtn from "./ActionBtn";
import SocialIco from "./SocialIco";

export default function Hero() {
  const actBtnData = [
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

  const altBtnData = [
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

  return (
    <div className="py-8">
      <h1 className="font-bold text-5xl leading-[1.2] mb-4 bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-blue-800">
        Hello, <br /> Myself Animesh.
      </h1>
      <p className="text-gray-500 mb-4">
        I am a <span className="text-sky-500 font-semibold">MERN</span> and{" "}
        <span className="text-sky-500 font-semibold">NextJS</span> developer who
        likes to code everything from scratch and like to add creativity to
        everything I make, and I continue to learn. Always.
      </p>
      <div className="flex items-center gap-2 mb-8">
        <Image
          src="./images/location.svg"
          alt="location"
          width={20}
          height={20}
        />
        <p>Gurgaon, Haryana, India</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {actBtnData.map((item, index) => (
            <ActionBtn key={index} {...item} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {altBtnData.map((item, index) => (
            <SocialIco key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
