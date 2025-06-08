import Image from "next/image";

export default function TimeCard({
  img,
  period,
  comp,
  desc,
  content,
  url,
}: {
  img: string;
  period: string;
  comp: string;
  desc: string;
  content: string[];
  url: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_4fr] py-8 relative cust-anim-1 hover:bg-[var(--foreground)]/10">
      <div className="flex justify-center items-center">
        <a
          href={url}
          className="bg-[var(--background)] border-2 border-[var(--dark)] rounded-full h-12 w-12"
        >
          <Image src={img} width={80} height={80} alt="rk" />
        </a>
      </div>
      <div className="flex items-center">
        <div>
          <p className="text-xs text-[var(--foreground)]/70">{period}</p>
          <h3 className="font-semibold text-[var(--accent)]">{comp}</h3>
          <p className="text-sm mb-2 text-[var(--foreground)]">{desc}</p>
          <ul className="list-disc pl-4">
            {content.map((item, index) => (
              <li key={index} className="text-sm text-[var(--foreground)]/70">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[2px] h-full bg-[var(--dark)] absolute top-0 left-[9.9%] z-[-1]"></div>
    </div>
  );
}
