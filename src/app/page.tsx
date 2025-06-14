import BlogCard from "@/components/blog/BlogCard";
import GenBtn from "@/components/general/GenBtn";
import Bio from "@/components/home/Bio";
import Hero from "@/components/home/Hero";
import SkillPill from "@/components/home/SkillPill";
import ProjCard from "@/components/projects/ProjCard";
import { skillsDat, blogData1, projHigh } from "@/data/homeData";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      {/* Skills */}
      <div className="py-8">
        <h2 className="text-xl mb-4 text-[var(--foreground)] font-semibold">
          <span className="text-[var(--accent)]">Technologies</span> I currently
          work on
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {skillsDat.map((item, index) => (
            <SkillPill key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className="py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl text-[var(--foreground)] font-semibold">
            <span className="text-[var(--accent)]">Project</span> highlights
          </h2>
          <GenBtn col="hov-blu" link="/projects" name="View More" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {projHigh.map((item, index) => (
            <ProjCard key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Blog */}
      <div className="py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl text-[var(--foreground)] font-semibold">
            Rescent <span className="text-[var(--accent)]">atricles</span>
          </h2>
          <GenBtn col="hov-blu" link="/blog" name="View More" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {blogData1.map((item, index) => (
            <BlogCard key={index} big={index === 0} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
