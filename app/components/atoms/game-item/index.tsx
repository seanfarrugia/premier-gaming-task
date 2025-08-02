import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Game } from "@/app/db/game";
import { GameInfo } from "@/app/components/atoms/game-info";

export const GameItem: React.FC<Game> = game => {
    return (
        <li>
            <div className="relative">
                <Link href={`/games/${game.slug}`} className="group rounded-4xl">
                    <Image
                        className="object-cover w-full h-96 rounded-4xl opacity-90 group-hover:scale-[98%] transition duration-300"
                        src={`https:${game.game_background}`}
                        alt={`${game.title} thumbnail`}
                        width={150}
                        height={200} 
                    />
                    <div className="bottom-0 left-0 p-4 rounded-4xl w-full absolute flex items-end justify-center gap-4">
                        <GameInfo
                            gameTitle={game.title}
                            gameProvider={game.game_provider.name}
                            gameThumbnail={game.game_thumbnail}
                            showDetailsLink={false}
                        />
                    </div>
                </Link>
            </div>
        </li>
    )
}