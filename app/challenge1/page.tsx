"use client";
import { useEffect, useState } from "react";

export default function Challenge1() {
    const [hint, setHint] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHint("Inspect... deeply. The truth hides in shadows.");
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-4 glitch text-red-500">Challenge 1: The Source of All Truth</h1>

            <div className="w-full max-w-2xl bg-zinc-900 p-6 rounded-md shadow-lg border border-green-500">
                <p className="text-md mb-4">
                    A digital ghost once said...
                </p>
                <div className="bg-black text-lime-400 p-4 rounded-sm text-sm">
                    &gt; Sometimes you have to <span className="text-yellow-400">view the source</span>.<br />
                    &gt; The shadows whisper in bits and pixels.
                </div>

                <div className="mt-6">
                    <a
                        target="_blank"
                        href="/seeyounexttime"
                        download
                        className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded shadow-md transition"
                    >
                        See you next time!
                    </a>
                </div>

                {hint && (
                    <div className="mt-6 text-sm text-gray-400 italic">
                        💡 {hint}
                    </div>
                )}
            </div>

            {/* GDG{GDG_CTF_B3GiN$!} */}
        </div>
    );
}
