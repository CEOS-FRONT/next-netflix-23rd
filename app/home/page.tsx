import HomeHeader from "@/components/HomeHeader";
import HeroBanner from "@/components/HeroBanner";
import BannerButtons from "@/components/BannerButtons";
import Previews from "@/components/Previews";
import ContinueWatching from "@/components/ContinueWatching";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  return (
    <main>
      <HomeHeader />
      <HeroBanner />
      <BannerButtons />
      <Previews />
      <ContinueWatching />
      <BottomNav />
    </main>
  );
}
