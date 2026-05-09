import BottomNav from "@/components/BottomNav";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
        <div className="w-14 h-14 rounded-full border-[5px] border-red-500 border-t-transparent animate-spin" />
        <p className="text-caption1 text-white">서비스 준비 중입니다.</p>
      </div>

      <BottomNav />
    </div>
  );
}
