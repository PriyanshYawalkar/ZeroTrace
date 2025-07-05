export default function FinalFlag() {
    return (
        <div className="h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl md:text-5xl glitch text-red-500 mb-6">Game Over, Hacker</h1>
            <p className="text-lg mb-4">You made it through the system. No firewall, no deception, no backdoor could stop you.</p>

            <div className="bg-zinc-900 border border-green-500 p-6 rounded-md shadow-lg max-w-xl">
                <p className="text-md">Here’s what you came for:</p>
                <pre className="bg-black text-lime-400 mt-4 p-4 rounded overflow-x-auto">FLAG&#123;T#3_CTF_!s_Ov3r&#125;</pre>
            </div>

            <p className="mt-8 text-sm italic text-gray-400">🎉 You completed the ZeroTrace CTF. Share your flag, not your secrets.</p>
        </div>
    );
}
