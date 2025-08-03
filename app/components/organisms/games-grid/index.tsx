'use client'
import React, {useEffect, useState, useRef} from 'react';
import { Game } from '@/app/db/game';
import { IoInformationCircleOutline } from "react-icons/io5";

import { GameItem } from '@/app/components/atoms/game-item';
import { Header } from '@/app/components/organisms/header';
import { GameSkeleton } from './skeleton';

export const GamesGrid: React.FC = () => {
    const [gamesList, setGamesList] = useState<Game[]>([]);
    const [search, setSearch] = useState('');
    const isInitialized = useRef(false);
    
    useEffect(() => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => {
                isInitialized.current = true;
                setGamesList(Object.values(data));
            });
    }, []);

    const filteredGames = search.length 
        ? gamesList.filter((game) => game.title.toLowerCase().includes(search.toLowerCase())) 
        : gamesList;

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <div className='m-4'>
                {gamesList.length 
                ?
                    filteredGames.length 
                    ? <ul className='grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        {filteredGames.map((game: Game) => {
                            return (
                                <GameItem {...game} key={game.id} />
                            )
                        })}
                    </ul>
                    : <p className='text-center bg-white rounded-3xl p-8 font-semibold text-neutral-700 flex items-center gap-2'>
                        <IoInformationCircleOutline className='inline-block' size={34} />
                        No Games Found</p>
                : isInitialized.current ? <p className='text-center bg-white rounded-3xl p-8 font-semibold text-neutral-700'>No games are currently available</p> : <GameSkeleton />}
            </div>
        </>
    )
}