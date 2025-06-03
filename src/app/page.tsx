import Bio from "@/components/home/Bio";
import Hero from "@/components/home/Hero";
import SkillPill from "@/components/home/SkillPill";
import { skillsDat } from "@/data/homeData";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      <div className="py-8">
        <h2 className="text-xl mb-4">Technologies I currently work on</h2>
        <div className="grid grid-cols-3 gap-4">
          {skillsDat.map((item, index) => (
            <SkillPill key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
