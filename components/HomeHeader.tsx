import Image from "next/image";

export default function HomeHeader() {
  return (
    <header className="fixed top-6 w-93.75 flex items-center justify-between pl-4 pr-6 z-10">
      <Image
        src="/icons/icon-Netflix.svg"
        alt="Netflix"
        width={56}
        height={56}
      />
      <nav className="flex flex-1 items-center justify-between ml-4">
        <span className="text-white text-body1 antialiased">TV Shows</span>
        <span className="text-white text-body1 antialiased">Movies</span>
        <span className="text-white text-doby1 antialiased">My List</span>
      </nav>
    </header>
  );
}
