export default function HeroBanner() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-100 w-full bg-zinc-800">
        {/* 사진 자리 - API 연결 후 채울 예정 */}
      </div>

      <div className="relative w-full flex justify-center">
        <span className="antialiased text-label2 text-white whitespace-nowrap">
          #2 in Korea Today
        </span>
      </div>
    </div>
  );
}
