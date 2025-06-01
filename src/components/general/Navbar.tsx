"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="py-6 flex items-center gap-6">
      {navItems.map(({ href, label }) => (
        <div key={href} className="flex flex-col justify-center group">
          <Link
            href={href}
            className={`transition-colors cursor-pointer ${
              pathname === href
                ? "text-sky-600"
                : "text-gray-500 hover:text-sky-500"
            }`}
          >
            {label}
          </Link>
          <div
            className={`h-[2px] bg-gray-500 w-0 group-hover:w-full transition-all duration-300 ${pathname === href ? "w-full" : ""}`}
          ></div>
        </div>
      ))}
    </nav>
  );
}
