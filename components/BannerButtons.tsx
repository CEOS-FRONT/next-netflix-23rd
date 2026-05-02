import Image from "next/image";

export default function BannerButtons() {
  return (
    <div className="h-11 flex flex-rol gap-11 bg-none justify-center mt-3.5">
      <div className="flex flex-col gap-0.5 items-center">
        <Image src="/icons/icon-plus.svg" alt="플러스" width={24} height={24} />
        <span className="text-white text-caption1">My List</span>
      </div>
      <button className="flex flex-rol w-27 items-center justify-center gap-3 bg-Grey-5 rounded-sm">
        <Image
          src="/icons/icon-play-filled.svg"
          alt="재생"
          width={18}
          height={16}
        />
        <span className="text-label1 text-black antialiased">Play</span>
      </button>
      <div className="flex flex-col gap-0.5 items-center">
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
