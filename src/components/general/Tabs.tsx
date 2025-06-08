"use client";

export default function Tabs({
  funcAction,
  tab,
}: {
  funcAction: React.Dispatch<React.SetStateAction<string>>;
  tab: string;
}) {
  return (
    <div className="border-[var(--foreground)]/10 border-2 rounded-md grid grid-cols-3">
      <button
        onClick={() => {
          funcAction("tab1");
        }}
        className={`cust-anim-1 rounded-sm p-1 cursor-pointer ${
          tab === "tab1"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/70"
        }`}
      >
        Work
      </button>
      <button
        onClick={() => {
          funcAction("tab2");
        }}
        className={`cust-anim-1 rounded-sm p-1 cursor-pointer ${
          tab === "tab2"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/70"
        }`}
      >
        Education
      </button>
      <button
        onClick={() => {
          funcAction("tab3");
        }}
        className={`cust-anim-1 rounded-sm p-1 cursor-pointer ${
          tab === "tab3"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/70"
        }`}
      >
        Certificates
      </button>
    </div>
  );
}
