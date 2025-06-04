export default function ProjCard() {
  return (
    <div className="border-gray-500/10 border-[2px] p-4 hov-blu cust-anim-1 group rounded-md">
      <p className="text-gray-500 group-hover:text-[var(--foreground)] cust-anim-1">
        Ukiyo Stays is a immersive villa rental service website where hosts can
        rent their properties and then book a stay with the host and is a real
        world full stack website.
      </p>
      <div className="flex flex-wrap items-center gap-2 my-2">
        <p className="py-1 px-3 bg-sky-500/10 text-sm rounded-md text-gray-300">
          Socket.io
        </p>
        <p className="py-1 px-3 bg-sky-500/10 text-sm rounded-md text-gray-300">
          Express
        </p>
        <p className="py-1 px-3 bg-sky-500/10 text-sm rounded-md text-gray-300">
          MongoBD
        </p>
        <p className="py-1 px-3 bg-sky-500/10 text-sm rounded-md text-gray-300">
          React
        </p>
      </div>
      <h3 className="text-sky-500/20 font-extrabold text-5xl group-hover:text-sky-500 cust-anim-1">
        Ukiyo Stays
      </h3>
    </div>
  );
}
