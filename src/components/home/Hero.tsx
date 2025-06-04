import Image from "next/image";
import ActionBtn from "./ActionBtn";
import SocialIco from "@/components/general/SocialIco";
import { socialsData } from "@/data/generalData";
import { actBtnData } from "@/data/homeData";

export default function Hero() {
  return (
    <div className="py-8">
      <h1 className="font-bold text-5xl text-gray-500 leading-[1.2] mb-4">
        Hello, <br /> Myself <span className="text-sky-600">Animesh</span>.
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
        <p>Gurugram, Haryana, India</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {actBtnData.map((item, index) => (
            <ActionBtn key={index} {...item} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {socialsData.map((item, index) => (
            <SocialIco key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
