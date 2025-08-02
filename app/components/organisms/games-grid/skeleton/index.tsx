import React from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { BiSolidGame } from "react-icons/bi";

export const GameSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
      {[...Array(8)].map((_, i) => (
          <div key={i} role="status" className="flex flex-col relative items-center justify-center h-96 w-full bg-gray-300 rounded-3xl animate-pulse dark:bg-white">
              <IoGameControllerOutline size={48} className="text-gray-500" />
              <div className="absolute bottom-0 w-full">
                <div className='p-4 w-full flex items-center gap-2'>
                  <BiSolidGame size={48} className="text-gray-500" />
                  <div className='w-full'>
                    <div className="h-2.5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
          </div>
      ))}
    </div>
  );
};