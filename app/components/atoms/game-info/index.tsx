import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoGameControllerOutline, IoArrowForwardSharp  } from "react-icons/io5";

interface GameInfoProps {
    gameTitle: string;
    gameProvider: string;
    gameThumbnail: string;
    gameProviderLink?: string;
    showDetailsLink?: boolean;
    TitleTag?: React.ElementType;
    customClassName?: string;
}

export const GameInfo: React.FC<GameInfoProps> = ({
    gameTitle,
    gameProvider,
    gameThumbnail,
    gameProviderLink,
    showDetailsLink = true,
    TitleTag = "h3",
    customClassName = ""
}) => {
    return (
        <div className={`backdrop-blur-3xl grid ${TitleTag !== 'h1' ? "grid-cols-[64px_1fr_48px]" : "grid-cols-[96px_1fr] md:grid-cols-[96px_1fr_1fr]"} items-center p-4 gap-4 rounded-4xl w-full border border-[rgba(255,255,255,.2)] ${customClassName}`}>
            <Image
                className={`object-cover ${TitleTag !== 'h1' ? "h-16 w-16" : "h-24 w-24"} rounded-full border border-[rgba(255,255,255,.2)]`}
                src={`https:${gameThumbnail}`}
                alt={`${gameTitle} thumbnail`}
                width={150}
                height={200} 
            />
            <div>
                <TitleTag className={`text-blue-50 ${TitleTag === 'h1' ? "text-3xl" : "text-xl"} font-semibold mb-2`}>{gameTitle}</TitleTag>
                <span className={`text-blue-50 ${TitleTag !== 'h1' ? "text-sm" : "text-base"} font-medium flex items-center gap-2`}>
                    <IoGameControllerOutline size={12} className="bg-blue-50 text-slate-800 rounded-full w-6 p-1 h-6" />
                    {gameProvider}
                </span>
            </div>
            
            {showDetailsLink 
            ?   (
                <Link href={`${gameProviderLink}`}
                    aria-label={`Play ${gameTitle} by ${gameProvider}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex col-span-3 w-full md:col-span-1 md:w-auto h-16 px-6 gap-2 items-center transition duration-300 justify-center ml-auto overflow-hidden rounded-4xl bg-blue-50 hover:bg-[rgba(188,141,10,1)] hover:text-blue-50">
                    Play Now
                    <div className="-rotate-45 transition duration-300 group-hover:rotate-0">
                        <IoArrowForwardSharp size={24} className="text-neutral-700 group-hover:text-blue-50 transition duration-300" />
                    </div>
                </Link>
            )
            :   (
                <button 
                    aria-label="View game details"
                    className="relative cursor-pointer inline-flex h-12 w-12 items-center transition duration-300 justify-center ml-auto overflow-hidden rounded-full bg-blue-50 group-hover:bg-[rgba(188,141,10,1)]">
                    <div className="-rotate-45 transition duration-300 group-hover:rotate-0">
                        <IoArrowForwardSharp size={24} className="text-neutral-700 group-hover:text-blue-50 transition duration-300" />
                    </div>
                </button>
            )}
        </div>
    )
}