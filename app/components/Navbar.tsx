"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center py-4 px-6 bg-black border-b border-green-500">
            <h1 className="text-xl font-bold text-green-500">ZeroTrace CTF</h1>

            <div className="space-x-6">
                <Link href="/" className="text-green-400 hover:text-white">Home</Link>
                <Link href="/about" className="text-green-400 hover:text-white">About Us</Link>
                <Link href="/submit" className="text-green-400 hover:text-white">Submit</Link>
            </div>
        </nav>
    );
}
