"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { icon: "/icons/icon-home-filled.svg", label: "Home", href: "/home" },
  { icon: "/icons/icon-search.svg", label: "Search", href: "/search" },
  {
    icon: "/icons/icon-comingsoon.svg",
    label: "Coming Soon",
    href: "/comingSoon",
  },
  { icon: "/icons/icon-downloads.svg", label: "Downloads", href: "/downloads" },
  { icon: "/icons/icon-more.svg", label: "More", href: "/more" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 flex flex-col w-93.75 bg-black">
      <div className="flex h-14 px-6 justify-between items-center">
        {NAV_ITEMS.map(({ icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 text-[8px] ${isActive ? "text-white" : "text-Grey-700"}`}
            >
              <Image src={icon} alt={label} width={18} height={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center pb-2 mt-4">
        <div className="w-30 h-1 bg-white rounded-full" />
      </div>
    </nav>
  );
}
