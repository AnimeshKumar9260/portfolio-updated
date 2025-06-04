import Bio from "@/components/home/Bio";
import Hero from "@/components/home/Hero";
import SkillPill from "@/components/home/SkillPill";
import ProjCard from "@/components/projects/ProjCard";
import { skillsDat } from "@/data/homeData";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      {/* Skills */}
      <div className="py-8">
        <h2 className="text-xl mb-4 font-semibold">
          Technologies I currently work on
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {skillsDat.map((item, index) => (
            <SkillPill key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className="py-8">
        <h2 className="text-3xl mb-6 font-semibold">Project highlights</h2>
        <div className="grid grid-cols-2 gap-4">
          <ProjCard />
          <ProjCard />
          <ProjCard />
          <ProjCard />
        </div>
      </div>
    </div>
  );
}
