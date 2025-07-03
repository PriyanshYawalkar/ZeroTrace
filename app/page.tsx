"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState("");
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const targetTime = new Date("2025-07-05T11:30:00Z").getTime(); // 5PM IST

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        setShowStart(true);
        setTimeLeft("");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
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
          Welcome, player. Find the 3 hidden flags. Trust no UI.
        </p>

        {showStart ? (
          // Uncomment this when the CTF goes live
          // <button
          //   onClick={handleStart}
          //   className="mt-6 px-6 py-3 border border-green-500 text-white bg-black hover:bg-green-900 transition rounded"
          // >
          //   ▶ Start the Game
          // </button>
          <p className="text-yellow-400 text-lg md:text-2xl">CTF is now live! Uncomment the button to enable access.</p>
        ) : (
          <div className="font-bold tracking-widest mt-2 animate-pulse">
            <p className="text-sm md:text-base text-lime-300">⏳ INITIATING HACK SEQUENCE...</p>
            <p className="text-3xl md:text-5xl text-yellow-300 mt-2">{timeLeft}</p>
          </div>
        )}

        <p className="mt-8 text-sm text-gray-500 italic">
          💀 This game is best played with your dev tools open.
        </p>
      </div>
    </div>
  );
}
