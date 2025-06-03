export default function Tabs() {
  return (
    <div className="border-sky-500/20 border-3 bg-sky-500/10 rounded-md grid grid-cols-3">
      <button className="font-semibold bg-sky-900 rounded-sm p-1 cursor-pointer text-[var(--foreground)]">
        Work
      </button>
      <button className="font-semibold rounded-sm p-1 cursor-pointer text-gray-500">
        Education
      </button>
      <button className="font-semibold rounded-sm p-1 cursor-pointer text-gray-500">
        Certificates
      </button>
    </div>
  );
}
