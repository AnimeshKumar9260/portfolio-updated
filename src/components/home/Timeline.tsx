import Image from "next/image";

export default function Timeline() {
  return (
    <div className="border-gray-500/10 border-3 rounded-md">
      <div className="grid grid-cols-[1fr_4fr] py-8 relative">
        <div className="flex justify-center items-center">
          <div className="bg-[var(--foreground)] rounded-full h-12 w-12">
            <Image src="/images/rk.webp" width={80} height={80} alt="rk" />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <p className="text-xs text-gray-500">Apr 2025 - Current</p>
            <h3 className="font-semibold">RegisterKaro</h3>
            <p className="text-sm mb-2">Front-end Web Developer</p>
            <ul className="list-disc pl-4">
              <li className="text-sm text-gray-500">
                Working on performance improvements, bug fixes and UI/UX
                improvements.
              </li>
              <li className="text-sm text-gray-500">
                Working on SEO optimizations on client side.
              </li>
              <li className="text-sm text-gray-500">
                Making online tools for company website.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[2px] h-full bg-sky-500/20 absolute top-0 left-[9.9%] z-[-1]"></div>
      </div>
    </div>
  );
}
