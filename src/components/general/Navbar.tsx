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
                ? "text-[var(--accent)]"
                : "text-[var(--light)] hover:text-[var(--accent)]"
            }`}
          >
            {label}
          </Link>
          <div
            className={`h-[2px] bg-[var(--accent)] w-0 group-hover:w-full cust-anim-1 ${
              pathname === href ? "w-full" : ""
            }`}
          ></div>
        </div>
      ))}
    </nav>
  );
}
