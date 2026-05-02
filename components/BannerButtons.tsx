import Image from "next/image";

export default function BannerButtons() {
  return (
    <div className="h-11 w-64.5 flex flex-rol gap-11 bg-none">
      <div className="flex flex-col gap-0.5">
        <Image src="/icons/icon-plus.svg" alt="플러스" width={24} height={24} />
        <span className="text-white text-caption1">My List</span>
      </div>
      <button className="flex flex-rol gap-3 bg-Grey-5">
        <Image
          src="/icons/icon-play-filled.svg"
          alt="재생"
          width={18}
          height={16}
        />
        <span className="text-label1 text-black antialiased">Play</span>
      </button>
      <div className="flex flex-col gap-0.5">
        <Image
          src="/icons/icon-info-circle.svg"
          alt="정보"
          width={24}
          height={24}
        />
        <span className="text-white text-caption1">Info</span>
      </div>
    </div>
  );
}
