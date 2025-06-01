import Image from "next/image";

export default function ActionBtn({
  name,
  alt,
  ico,
  border,
  href,
}: {
  name: string;
  alt: string;
  ico: string;
  border: string;
  href: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`relative group overflow-hidden flex gap-3 items-center border-2 ${border} px-4 py-1 rounded-md cursor-pointer min-w-[120px]`}
    >
      <Image src={ico} alt={name} width={20} height={20} />
      <p className="group-hover:translate-y-[-100%] tansition-all duration-300">
        {name}
      </p>
      <p className="absolute group-hover:top-1 transition-all duration-300 top-[100%] left-12">
        {alt}
      </p>
    </a>
  );
}
