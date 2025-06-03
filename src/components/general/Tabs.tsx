export default function Tabs() {
  return (
    <div className="border-gray-500 border-4 bg-gray-500 rounded-md grid grid-cols-3">
      <button className="bg-[var(--background)] rounded-sm p-1 cursor-pointer">
        Work
      </button>
      <button className="rounded-sm p-1 cursor-pointer">Education</button>
      <button className="rounded-sm p-1 cursor-pointer">Certificates</button>
    </div>
  );
}
