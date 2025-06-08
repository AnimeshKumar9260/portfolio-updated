import Image from "next/image";

export default function ActionBtn({
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
      className={`flex justify-center group/action items-center cust-anim-1 ${col} gap-3 cust-bord px-4 py-1 rounded-md cursor-pointer`}
    >
      <Image
        src={ico}
        alt={name}
        width={20}
        height={20}
        className="filter cust-anim-1 opacity-80 group-hover/action:opacity-100"
      />
      <p className="text-[var(--foreground)]/70 font-semibold">{name}</p>
    </a>
  );
}
