import Image from "next/image";

const NAV_ITEMS = [
  { icon: "/icons/icon-home.svg", label: "홈" },
  { icon: "/icons/icon-search.svg", label: "검색" },
  { icon: "/icons/icon-comingsoon.svg", label: "공개예정" },
  { icon: "/icons/icon-downloads.svg", label: "다운로드" },
  { icon: "/icons/icon-more.svg", label: "더보기" },
];

export default function BottomNav() {
  return (
    <nav className="h-14 px-5 bg-Grey-900 flex items-center justify-between">
      {NAV_ITEMS.map(({ icon, label }) => (
        <button key={label} className="flex flex-col items-center gap-1">
          <Image src={icon} alt={label} width={18} height={18} />
        </button>
      ))}
    </nav>
  );
}
