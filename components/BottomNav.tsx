"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { icon: "/icons/icon-home.svg", label: "Home", href: "/home" },
  { icon: "/icons/icon-search.svg", label: "Search", href: "/search" },
  { icon: "/icons/icon-comingsoon.svg", label: "Coming Soon", href: "/comingSoon" },
  { icon: "/icons/icon-downloads.svg", label: "Downloads", href: "/downloads" },
  { icon: "/icons/icon-more.svg", label: "More", href: "/more" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 flex w-93.75 h-14 px-6 bg-black justify-between items-center">
      {NAV_ITEMS.map(({ icon, label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 text-[8px] ${isActive ? "text-white" : "text-Grey-700"}`}
          >
            <Image src={icon} alt={label} width={24} height={24} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
