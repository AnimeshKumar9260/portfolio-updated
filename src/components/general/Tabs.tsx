"use client";

export default function Tabs({
  funcAction,
  tab,
}: {
  funcAction: React.Dispatch<React.SetStateAction<string>>;
  tab: string;
}) {
  return (
    <div className="cust-bord rounded-md grid grid-cols-3">
      <button
        onClick={() => {
          funcAction("tab1");
        }}
        className={`cust-anim-1 rounded-sm p-1 font-semibold cursor-pointer ${
          tab === "tab1"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/40"
        }`}
      >
        Work
      </button>
      <button
        onClick={() => {
          funcAction("tab2");
        }}
        className={`cust-anim-1 rounded-sm p-1 font-semibold cursor-pointer ${
          tab === "tab2"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/40"
        }`}
      >
        Education
      </button>
      <button
        onClick={() => {
          funcAction("tab3");
        }}
        className={`cust-anim-1 rounded-sm p-1 font-semibold cursor-pointer ${
          tab === "tab3"
            ? "bg-[var(--acclight)]/50 text-[var(--foreground)]"
            : "text-[var(--foreground)]/40"
        }`}
      >
        Certificates
      </button>
    </div>
  );
}
