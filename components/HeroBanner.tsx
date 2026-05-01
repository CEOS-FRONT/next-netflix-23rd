export default function HeroBanner() {
  return (
    <div className="relative h-103.75 w-full bg-zinc-800">
      {/* 사진 자리 - API 연결 후 채울 예정 */}
      <div className="absolute inset-0" />
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-heading2 text-white whitespace-nowrap">
        #2 in Korea Today
      </span>
    </div>
  );
}
