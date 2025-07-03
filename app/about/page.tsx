"use client";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-black text-green-400 min-h-screen font-mono px-6 py-12">
            <div className="max-w-3xl mx-auto text-center">
                <Image
                    src="/gdg.png"
                    alt="Google Developer Groups Logo"
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                />

                <h1 className="text-4xl text-red-500 glitch font-bold mb-6">About ZeroTrace CTF</h1>

                <p className="text-lime-300 text-md leading-relaxed mb-6">
                    <strong>ZeroTrace CTF</strong> is a hacker-themed capture the flag competition that blends
                    curiosity, logic, and a little paranoia. Inspired by shows like Mr. Robot and the thrill
                    of digital puzzles, it&#39;s a 3-hour web-based adventure filled with flags hidden in plain sight,
                    buried in code, and locked behind clever tricks.
                </p>

                <p className="text-lime-300 text-md leading-relaxed mb-6">
                    Whether you&#39;re a seasoned hacker or just starting out, ZeroTrace is designed to challenge your
                    problem-solving skills and your attention to detail — without requiring deep technical expertise.
                    It&#39;s all about how you think.
                </p>

                <h2 className="text-2xl text-yellow-400 mt-10 mb-4">About Google Developer Groups (GDG)</h2>

                <p className="text-lime-300 text-md leading-relaxed">
                    <strong>Google Developer Groups (GDG)</strong> are open and inclusive communities supported by Google,
                    created for developers, designers, and tech enthusiasts to learn, build, and connect.
                    GDG hosts talks, workshops, hackathons, and now — CTFs like ZeroTrace — all in the spirit
                    of fostering innovation and collaboration.
                </p>

                <p className="text-gray-500 text-xs mt-10 italic">
                    Organized by GDG-SSTC • ZeroTrace
                </p>
            </div>
        </div>
    );
}
