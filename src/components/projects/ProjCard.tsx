import HovBtn from "./HovBtn";

export default function ProjCard({
  name,
  visit,
  source,
  tags,
  desc,
}: {
  name: string;
  visit: string;
  source: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="border-gray-500/10 border-[2px] p-4 hov-blu cust-anim-1 group rounded-md">
      <p className="text-gray-500 group-hover:text-[var(--foreground)] cust-anim-1 max-h-[500px] group-hover:max-h-[0px] overflow-hidden">
        {desc}
      </p>
      <div className="flex flex-wrap items-center gap-2 my-2">
        {tags.map((item, index) => (
          <p
            key={index}
            className="py-1 px-3 bg-sky-500/10 text-sm rounded-md text-gray-300"
          >
            {item}
          </p>
        ))}
      </div>
      <h3 className="text-sky-500/20 font-extrabold text-5xl group-hover:text-sky-500 cust-anim-1">
        {name}
      </h3>
      <div className="flex justify-around cust-anim-1 items-center overflow-hidden group-hover:py-6 max-h-[0px] group-hover:max-h-[500px]">
        <HovBtn img="./images/open.svg" name="View Site" link={visit} />
        <HovBtn img="./images/github.svg" name="View Source" link={source} />
      </div>
    </div>
  );
}
