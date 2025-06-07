import GenBtn from "../general/GenBtn";

export default function ProjCard({
  name,
  visit,
  source,
  tags,
  desc,
}: {
  name: string;
  visit: string;
  source: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="border-[var(--foreground)]/10 border-2 p-4 relative group overflow-hidden rounded-md">
      <p className="text-[var(--foreground)]/70">{desc}</p>
      <div className="flex flex-wrap items-center gap-2 my-2">
        {tags.map((item, index) => (
          <p
            key={index}
            className="py-1 px-3 bg-[var(--light)] text-sm rounded-md text-[var(--foreground)]"
          >
            {item}
          </p>
        ))}
      </div>
      <h3 className="text-[var(--light)] font-extrabold text-5xl">{name}</h3>
      <div className="absolute top-0 left-0 h-full w-full flex">
        <button className="h-full w-full bg-[var(--light)] cursor-pointer text-[var(--foreground)]/70 cust-anim-1 -translate-x-[100%] group-hover:translate-x-0">
          View Page
        </button>
        <button className="h-full w-full bg-[var(--light)] cursor-pointer text-[var(--foreground)]/70 cust-anim-1 translate-x-[100%] group-hover:translate-x-0">
          View Source
        </button>
      </div>
    </div>
  );
}
