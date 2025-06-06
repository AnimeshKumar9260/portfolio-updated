"use client";

export default function Tabs({
  funcAction,
  tab,
}: {
  funcAction: React.Dispatch<React.SetStateAction<string>>;
  tab: string;
}) {
  return (
    <div className="border-gray-500/10 border-3 bg-gray-500/10 rounded-md grid grid-cols-3">
      <button
        onClick={() => {
          funcAction("tab1");
        }}
        className={`cust-anim-1 font-semibold rounded-sm p-1 cursor-pointer ${tab === "tab1" ? "bg-sky-500/20 text-[var(--foreground)]" : "text-gray-500 "}`}
      >
        Work
      </button>
      <button
        onClick={() => {
          funcAction("tab2");
        }}
        className={`cust-anim-1 font-semibold rounded-sm p-1 cursor-pointer ${tab === "tab2" ? "bg-sky-500/20 text-[var(--foreground)]" : "text-gray-500 "}`}
      >
        Education
      </button>
      <button
        onClick={() => {
          funcAction("tab3");
        }}
        className={`cust-anim-1 font-semibold rounded-sm p-1 cursor-pointer ${tab === "tab3" ? "bg-sky-500/20 text-[var(--foreground)]" : "text-gray-500 "}`}
      >
        Certificates
      </button>
    </div>
  );
}
