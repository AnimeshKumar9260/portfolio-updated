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
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center group/action items-center cust-anim-1 ${col} gap-3 border-2 border-[var(--foreground)]/10 px-4 py-1 rounded-md cursor-pointer`}
    >
      <p className="text-[var(--accent)]">{name}</p>
    </a>
  );
}
