'use client';

import React, { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                setVisible(window.scrollY > 200);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed ${visible ? 'bottom-4' : '-bottom-full'} right-4 group cursor-pointer hover:bg-white text-neutral-700 rounded-full p-3 bg-[rgba(188,141,10,1)] shadow-lg transition-all duration-500 z-50`}
            aria-label="Scroll to top"
        >
            <IoArrowUp size={24} className='text-white group-hover:text-neutral-700 transition-all duration-300' />
        </button>
    );
};
