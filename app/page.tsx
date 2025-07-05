"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-green-400 min-h-screen font-mono px-4 py-6 relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <Image
          src="/gdg.png"
          alt="CTF Logo"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center h-full pt-32 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl glitch text-red-500 mb-4">
          ZeroTrace Capture the Flag
        </h1>
        <p className="text-md md:text-lg text-lime-400 mb-8">
          Thank you for playing! The CTF has officially ended.
        </p>
        <p className="text-lg text-green-300 mb-4">🏁 See you again in the next round!</p>

        <p className="mt-8 text-sm text-gray-500 italic">
          🧠 Stay tuned for more challenges from GDG-SSTC. Until then... happy hacking!
        </p>
      </div>
    </div>
  );
}
