import { socialsData } from "@/data/generalData";
import SocialIco from "@/components/general/SocialIco";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-6">
      <p className="text-[var(--foreground)]/70">
        Made with{" "}
        <Image
          src="/images/coffee.svg"
          alt="heart"
          width={20}
          height={20}
          className="inline-block"
        />{" "}
        by{" "}
        <span className="text-[var(--accent)] font-semibold">
          Animesh Kumar
        </span>
      </p>
      <div className="flex items-center gap-4">
        {socialsData.map((item, index) => (
          <SocialIco key={index} {...item} />
        ))}
      </div>
    </footer>
  );
}
