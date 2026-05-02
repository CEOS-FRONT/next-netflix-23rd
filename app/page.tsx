"use client";

import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import NetflixJson from "../public/Netflix Logo.json";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie
        animationData={NetflixJson}
        play
        loop={false}
        onComplete={() => router.push("/home")}
      />
    </div>
  );
}
