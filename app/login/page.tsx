"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [flag, setFlag] = useState("");
    const [error, setError] = useState("");
    const [decoy, setDecoy] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [inputCaptcha, setInputCaptcha] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [locked, setLocked] = useState(false);
    const [terminalLines, setTerminalLines] = useState<string[]>([]);

    const router = useRouter(); // <-- Added router

    useEffect(() => {
        const generateCaptcha = () => Math.random().toString(36).substring(2, 8);
        setCaptcha(generateCaptcha());

        const captchaInterval = setInterval(() => {
            setCaptcha(generateCaptcha());
        }, 10000);

        return () => clearInterval(captchaInterval);
    }, []);

    useEffect(() => {
        const terminalInterval = setInterval(() => {
            setTerminalLines(prev => [
                ...prev.slice(-7),
                `> Attempting bypass at ${new Date().toLocaleTimeString()}`
            ]);
        }, 3000);

        return () => clearInterval(terminalInterval);
    }, []);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        if (inputCaptcha !== captcha) {
            setError("Captcha mismatch. Try again.");
            return;
        }

        if (username === "root" && password === "fsociety") {
            setFlag("FLAG{L0g1n_$ucc3ssfull}");
            setError("");

            // Delay a little before redirect (optional)
            setTimeout(() => {
                router.push("/flag");
            }, 1000);
        } else {
            setAttempts(prev => prev + 1);
            setError("Access Denied");
        }
    };

    useEffect(() => {
        if (attempts >= 3) {
            setLocked(true);
            setError("Too many failed attempts. System locked.");
        }
    }, [attempts]);

    useEffect(() => {
        const timer = setTimeout(() => setDecoy(true), 15000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("%cWARNING: Debugger Detected!", "color: red; font-size: 20px;");
        console.log("%cInspecting won't help... or will it?", "color: lime; font-style: italic;");
    }, []);

    return (
        <div className="h-screen bg-zinc-950 text-green-400 font-mono flex flex-col items-center justify-center px-4 relative">
            <div className="absolute top-0 left-0 p-2 text-xs text-lime-500 w-full h-32 overflow-hidden">
                <pre className="text-green-500 animate-pulse">
                    {terminalLines.map((line, index) => <div key={index}>{line}</div>)}
                </pre>
            </div>

            <h2 className="text-3xl text-red-500 mb-6 glitch mt-20">Login Here!</h2>

            <form onSubmit={handleLogin} className="space-y-4 bg-black p-6 rounded shadow-md border border-green-500 w-full max-w-md">
                <input
                    name="username"
                    placeholder="Username"
                    className="w-full px-4 py-2 bg-zinc-900 text-lime-300 border border-green-500 rounded placeholder-gray-400"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 bg-zinc-900 text-lime-300 border border-green-500 rounded placeholder-gray-400"
                />
                <div className="text-sm text-lime-300">
                    Solve Captcha: <span className="text-yellow-300">{captcha}</span>
                </div>
                <input
                    placeholder="Enter Captcha"
                    value={inputCaptcha}
                    onChange={(e) => setInputCaptcha(e.target.value)}
                    className="w-full px-4 py-2 bg-zinc-900 text-lime-300 border border-green-500 rounded placeholder-gray-400"
                />
                <button
                    disabled={locked}
                    className={`w-full ${locked ? 'bg-gray-700 cursor-not-allowed' : 'bg-red-600 hover:bg-red-800'} px-4 py-2 rounded text-white`}
                >
                    Access
                </button>
            </form>

            {flag && <p className="mt-6 text-lime-300 text-center">{flag}</p>}
            {error && <p className="mt-6 text-red-400 text-center animate-pulse">{error}</p>}

            <p className="mt-10 text-xs text-gray-500 italic">Hint: Check the frontend code, not everything is server-verified.</p>

            {decoy && (
                <div className="mt-12 text-center border border-red-700 p-4 rounded bg-zinc-900 max-w-md">
                    <h2 className="text-red-500 text-xl mb-2 glitch">[⚠️ Secure Root Interface]</h2>
                    <p className="text-sm text-gray-400 italic mb-1">Access token missing</p>
                    <input
                        placeholder="Enter root token..."
                        className="w-full px-4 py-2 mt-2 mb-3 bg-zinc-800 text-green-300 border border-red-500 rounded"
                    />
                    <button className="bg-red-800 px-4 py-1 text-white rounded cursor-not-allowed opacity-50">
                        Decrypt (disabled)
                    </button>
                    <p className="mt-2 text-xs text-red-500">Failed. This path is a dead end.</p>
                </div>
            )}
        </div>
    );
}
