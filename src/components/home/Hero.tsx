import Image from "next/image";
import ActionBtn from "./ActionBtn";

export default function Hero() {
  const actBtnData = [
    {
      name: "Resume",
      alt: "View",
      ico: "./images/document.svg",
      border: "border-sky-500/30",
      href: "https://drive.google.com/file/d/1zK52lg7qToDfBErgP12FLtdq0A83Ft8U/view?usp=sharing",
    },
    {
      name: "Contact",
      alt: "Call",
      ico: "./images/call.svg",
      border: "border-green-500/30",
      href: "tel:+919260998607",
    },
  ];

  return (
    <div className="py-8">
      <h1 className="font-bold text-5xl leading-[1.2] mb-4">
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
      <div className="flex items-center gap-4">
        {actBtnData.map((item, index) => (
          <ActionBtn key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
