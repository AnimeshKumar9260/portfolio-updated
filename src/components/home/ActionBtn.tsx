import Image from "next/image";

export default function ActionBtn({
  name,
  ico,
  border,
  href,
  col,
}: {
  name: string;
  ico: string;
  border: string;
  href: string;
  col: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`flex justify-center items-center cust-anim-1 ${col} gap-3 border-2 ${border} px-4 py-1 rounded-md cursor-pointer`}
    >
      <Image src={ico} alt={name} width={20} height={20} />
      <p className="">{name}</p>
    </a>
  );
}
