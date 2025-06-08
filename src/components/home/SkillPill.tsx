import Image from "next/image";

interface Skill {
  img: string;
  accent: string;
  name: string;
  desc: string;
}

export default function SkillPill({ img, accent, name, desc }: Skill) {
  return (
    <div className="flex items-center gap-4 cust-bord p-2 rounded-md cust-anim-1 hover:bg-[var(--foreground)]/10">
      <div className={`p-1.5 ${accent} rounded-md`}>
        <Image src={img} width={32} height={32} alt={name} />
      </div>
      <div>
        <p className="text-[var(--foreground)] font-semibold">{name}</p>
        <p className="text-sm text-[var(--foreground)]/70">{desc}</p>
      </div>
    </div>
  );
}
