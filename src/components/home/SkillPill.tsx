import Image from "next/image";

interface Skill {
  img: string;
  accent: string;
  name: string;
  desc: string;
}

export default function SkillPill({ img, accent, name, desc }: Skill) {
  return (
    <div className="flex items-center gap-4 bg-sky-500/10 p-2 rounded-md">
      <div className={`p-1.5 ${accent} rounded-md`}>
        <Image src={img} width={32} height={32} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
