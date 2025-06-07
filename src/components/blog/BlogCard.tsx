import Image from "next/image";

export default function BlogCard({
  big,
  head,
  desc,
  date,
  tagN,
  tagC,
  tagI,
}: {
  big: boolean;
  head: string;
  desc: string;
  date: string;
  tagN: string;
  tagC: string;
  tagI: string;
}) {
  return (
    <div
      className={` ${
        big && "col-span-2"
      } border-[var(--foreground)]/10 relative overflow-hidden group/blog border-2 hover:bg-[var(--foreground)]/10 cust-anim-1 group p-4 rounded-md`}
    >
      <h3 className="text-lg text-[var(--foreground)] group-hover/blog:text-[var(--accent)] cust-anim-1 font-semibold mb-2">
        {head}
      </h3>
      <p className="text-[var(--foreground)]/70 mb-4">{desc}</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/images/cal.svg" width={20} height={20} alt="calendar" />
          <p className="text-sm text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] cust-anim-1">
            {date}
          </p>
        </div>
        <div className={`flex items-center gap-2 py-1 px-2 rounded-md ${tagC}`}>
          <Image src={tagI} width={20} height={20} alt="calendar" />
          <p className="text-sm text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] cust-anim-1">
            {tagN}
          </p>
        </div>
      </div>
      <div className="absolute -translate-x-[100%] group-hover/blog:translate-0 cust-anim-1 bg-[var(--light)] top-0 left-0 h-full w-full"></div>
      <div className="absolute -translate-x-[100%] group-hover/blog:translate-0 cust-anim-2 top-0 left-0 h-full w-full flex">
        <button className="h-full w-full bg-[var(--dark)] cursor-pointer text-[var(--foreground)]/70">
          Read Article
        </button>
      </div>
    </div>
  );
}
