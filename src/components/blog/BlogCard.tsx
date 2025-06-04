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
      className={` ${big && "col-span-2"} border-gray-500/10 border-[2px] hov-blu cust-anim-1 group p-4 rounded-md`}
    >
      <h3 className="text-lg font-semibold mb-2">{head}</h3>
      <p className="text-gray-500 mb-4">{desc}</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/images/cal.svg" width={20} height={20} alt="calendar" />
          <p className="text-sm text-gray-500 group-hover:text-[var(--foreground)] cust-anim-1">
            {date}
          </p>
        </div>
        <div className={`flex items-center gap-2 py-1 px-2 rounded-md ${tagC}`}>
          <Image src={tagI} width={20} height={20} alt="calendar" />
          <p className="text-sm text-gray-500 group-hover:text-[var(--foreground)] cust-anim-1">
            {tagN}
          </p>
        </div>
      </div>
    </div>
  );
}
