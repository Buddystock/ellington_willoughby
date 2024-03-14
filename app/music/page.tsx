'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Musiclt from '@/public/images/music.svg';
import Musicdk from '@/public/images/music_dk.svg';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';

export default function Music() {
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen w-screen max-w-screen-lg mx-auto flex flex-col justify-center items-center p-24">
      {
        darkMode
          ? (
            <Image src={Musicdk} height={500} width={500} alt="shows heading" className="-mt-20 -mb-20" />
          ) : (
            <Image src={Musiclt} height={500} width={500} alt="shows heading" className="-mt-20 -mb-20" />
          )
      }
       <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
      </div>
  );

}
