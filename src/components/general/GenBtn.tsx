import Link from "next/link";

export default function GenBtn({
  name,
  col,
  link,
}: {
  name: string;
  col: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={`flex justify-center group/action items-center cust-anim-1 ${col} gap-3 cust-bord px-4 py-1 rounded-md cursor-pointer`}
    >
      <p className="text-[var(--foreground)]">{name}</p>
    </Link>
  );
}
