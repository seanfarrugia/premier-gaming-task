import React from 'react';
import { Game } from '@/app/db/game';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { GameHeader } from '@/app/components/molecules/game-header';
import { IoPricetagOutline, IoDesktop, IoGameControllerOutline, IoAlbumsOutline } from "react-icons/io5";
import { FaMobileButton } from "react-icons/fa6";



interface GamePageProps {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const {slug} = await params;

  const host = (await headers()).get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${protocol}://${host}/api/games/${slug}`);
  
  if (!res.ok) notFound();

  const game: Game = await res.json();

  return game && (
    <>
      <GameHeader {...game} />
      <main className="md:max-w-[1400px] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-[3fr_1fr] gap-4 p-4">
        <div className='bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'>
          <h2 className='text-2xl font-semibold text-neutral-700 mb-4'>Game Overview</h2>
          <span className='bg-blue-50 text-neutral-700 font-semibold px-4 py-2 rounded-full text-xs mb-4 inline-block'>
            <IoPricetagOutline size={14} className='inline-block mr-2 text-neutral-700' />
            {game.id}
          </span>
          {typeof game.content === 'string' && game.content.length > 0 ? (
            <div
              className="leading-8 text-neutral-700 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: game.content }}
            />
          ) : (
            <p className="text-neutral-400">No content available.</p>
          )}
          <h3 className='text-xl font-semibold text-neutral-700 my-4'>Device Support</h3>
          <div>
            {game.device_type.map((device, index) => (
              <span key={index} className='inline-flex items-center justify-center h-20 w-20 bg-blue-50 text-neutral-700 font-semibold px-4 py-2 rounded-full text-xs mr-4 mb-2'>
                {device === 'desktop' && <IoDesktop className='inline-block' size={30} />}
                {device === 'mobile' && <FaMobileButton className='inline-block' size={30} />}
              </span>
            ))}
          </div>
        </div>
        <div className='bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-fit'>
          <h3 className='text-2xl font-semibold text-neutral-700 mb-4'>Provider Details</h3>
          <ul className='flex flex-col gap-4 justify-start'>
            <li 
              className='inline-flex items-center text-xl'
            >
              <IoGameControllerOutline className='inline-block h-14 w-14 bg-blue-50 text-neutral-700 font-semibold px-4 py-2 rounded-full mr-2' size={30} />
              <span className='flex flex-col'>
                <strong className='text-xs'>Provider Name</strong>
                {game.game_provider.name}
              </span>
            </li>
            <li 
              className='inline-flex items-center'
            >
              <IoAlbumsOutline className='inline-block h-14 w-14 bg-blue-50 text-neutral-700 font-semibold px-4 py-2 rounded-full mr-2' size={30} />
              <span className='flex flex-col'>
                <strong className='text-xs'>Game Count</strong>
                {game.game_provider.count}
              </span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}