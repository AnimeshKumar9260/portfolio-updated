import Image from "next/image";

export default function SocialIco({
  name,
  ico,
  href,
  col,
}: {
  name: string;
  ico: string;
  href: string;
  col: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`flex justify-center group/actico items-center cust-anim-1 ${col} gap-3 border-2 border-[var(--foreground)]/10 px-4 py-1 rounded-md cursor-pointer`}
    >
      <Image
        src={ico}
        alt={name}
        width={20}
        height={20}
        className="filter opacity-80 cust-anim-1 group-hover/actico:opacity-100"
      />
    </a>
  );
}
