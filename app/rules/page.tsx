"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const rulesList = [
    "There are 3 hidden flags.",
    "You have 3 hours to find them all.",
    "Inspect everything: source code, images, console...",
    "Don't share the flags with others or you will be disqualified.",
    "Good luck, player.",
    "The game will start shortly...",
    "Taking you to the first challenge."
];

export default function Rules() {
    const [displayedRules, setDisplayedRules] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorBlink);
    }, []);

    useEffect(() => {
        if (currentIndex < rulesList.length) {
            const audio = new Audio("/type.wav");
            const timeout = setTimeout(() => {
                setDisplayedRules(prev => [...prev, rulesList[currentIndex]]);
                setCurrentIndex(prev => prev + 1);
                audio.play().catch(() => { });
            }, 1500);

            return () => clearTimeout(timeout);
        } else {
            const redirectTimeout = setTimeout(() => {
                router.push("/challenge1");
            }, 2000);
            return () => clearTimeout(redirectTimeout);
        }
    }, [currentIndex, router]);

    return (
        <div className="h-screen bg-black text-green-400 p-10 font-mono">
            <h2 className="text-2xl mb-4">CTF Rules:</h2>
            <ul className="list-disc list-inside">
                {displayedRules.map((rule, index) => (
                    <li key={index} className="mb-1">{rule}</li>
                ))}
                {currentIndex < rulesList.length && (
                    <li className="text-green-500">{showCursor ? "▌" : " "}</li>
                )}
            </ul>
        </div>
    );
}