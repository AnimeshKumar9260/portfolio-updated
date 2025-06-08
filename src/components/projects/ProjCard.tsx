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
    <div className="cust-bord p-4 relative group overflow-hidden rounded-md">
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
      <div className="absolute -translate-x-[100%] group-hover:translate-0 cust-anim-1 bg-[var(--light)] top-0 left-0 h-full w-full"></div>
      <div className="absolute -translate-x-[100%] group-hover:translate-0 cust-anim-2 top-0 left-0 h-full w-full flex">
        <a
          href={visit}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full flex justify-center items-center hover:bg-[var(--foreground)]/70 hover:text-[var(--background)] cust-anim-1 bg-[var(--dark)] font-semibold cursor-pointer text-[var(--foreground)]/70"
        >
          View Page
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full flex justify-center items-center hover:bg-[var(--foreground)]/70 hover:text-[var(--background)] cust-anim-1 bg-[var(--dark)] font-semibold cursor-pointer text-[var(--foreground)]/70"
        >
          View Source
        </a>
      </div>
    </div>
  );
}
