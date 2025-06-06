import Image from "next/image";

export default function HovBtn({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="flex justify-center group/btn grow items-center flex-col gap-2"
    >
      <Image
        src={img}
        width={55}
        height={55}
        alt="github"
        className="filter grayscale cust-anim-1 group-hover/btn:grayscale-0"
      />
      <p className="text-gray-500 cust-anim-1 group-hover/btn:text-[var(--foreground)]">
        {name}
      </p>
    </a>
  );
}
