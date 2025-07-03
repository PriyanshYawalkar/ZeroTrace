"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full flex flex-wrap items-center py-4 px-6 bg-black border-b border-green-500">
            <div className="flex justify-between items-center w-full md:w-auto">
                <h1 className="text-xl font-bold text-green-500 mr-4">ZeroTrace CTF</h1>
                <button
                    className="md:hidden text-green-400 focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} md:block`}
            >
                <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
                    <Link href="/" className="text-green-400 hover:text-white py-2 md:py-0">Home</Link>
                    <Link href="/about" className="text-green-400 hover:text-white py-2 md:py-0">About Us</Link>
                    <Link href="/submit" className="text-green-400 hover:text-white py-2 md:py-0">Submit</Link>
                </div>
            </div>
        </nav>
    );
}
