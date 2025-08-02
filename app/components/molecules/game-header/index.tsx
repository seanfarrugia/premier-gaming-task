import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Game } from "@/app/db/game";
import { GameInfo } from "@/app/components/atoms/game-info";
import { IoArrowBackOutline } from "react-icons/io5";

export const GameHeader: React.FC<Game> = (game) => {
    return (
        <header className="relative h-96">
            <Image
                className="w-full h-96 overflow-hidden object-center object-cover absolute top-0 left-0"
                src={`https:${game.game_background}`}
                alt={`${game.title} background`}
                width={150}
                height={200}
            />
            <div className="md:max-w-[1400px] 2xl:max-w-[1600px] mx-auto h-full flex flex-col z-30 opacity-100">
                <Link href={'/'} className="group m-4 w-fit inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full backdrop-blur-3xl border border-[rgba(255,255,255,.2)] z-30 py-1 pl-6 pr-14 font-medium text-neutral-50">
                    <span className="z-10 pr-2 mask group-hover:text-neutral-700 transition-colors">Back to Games</span>
                    <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-blue-50 transition-[width] group-hover:w-[calc(100%-8px)]">
                        <div className="mr-3.5 flex items-center justify-center">
                            <IoArrowBackOutline size={24} className="text-neutral-700"/>
                        </div>
                    </div>
                </Link>
                <div className="flex items-end justify-center mt-auto">
                    <GameInfo 
                        gameTitle={game.title}
                        gameProvider={game.game_provider.name}
                        gameThumbnail={game.game_thumbnail}
                        gameProviderLink={game.game_provider.link}
                        TitleTag="h1"
                        customClassName="m-4"
                    />
                </div>
            </div>
        </header>
    )
}