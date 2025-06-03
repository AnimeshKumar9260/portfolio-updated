import Image from "next/image";

export default function SkillPill() {
  return (
    <div className="flex items-center gap-4 bg-gray-500/30 p-2 rounded-md">
      <div className="p-1.5 bg-sky-300/20 rounded-md">
        <Image src="./images/react.svg" width={32} height={32} alt="react" />
      </div>
      <div>
        <p>React</p>
        <p className="text-sm text-gray-500">Javascript Library</p>
      </div>
    </div>
  );
}
