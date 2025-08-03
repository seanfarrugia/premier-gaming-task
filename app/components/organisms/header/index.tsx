import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoSearch } from "react-icons/io5";

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
    search = '',
    setSearch
}) => {
    return (
        <header className="h-20 sticky top-4 left-0 z-50 bg-white flex items-center justify-between border-gray-200 border m-4 p-4 rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between gap-12 w-full">
                <Link href="/" className="text-blue-50 text-2xl font-bold" aria-label="Navigate to Homepage">
                    <Image
                        className="object-cover w-36"
                        src={`/premier-gaming-logo.png`}  
                        alt={`Premier Gaming Logo`}
                        width={250}
                        height={100}
                    />
                </Link>
                <label htmlFor="search" className="relative w-full">
                    <IoSearch size={18} className="text-neutral-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input 
                        id="search"
                        name="search"
                        type="text" 
                        placeholder="Search for games ..." 
                        className="p-4 rounded-xl w-full pl-10 border text-sm border-gray-200 focus:outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        aria-label="Search for games"
                    />
                </label>
            </div>
        </header>
    )
}