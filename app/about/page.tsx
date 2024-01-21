'use client'
import Link from 'next/link';
import { useState } from 'react'
import { PiXBold } from 'react-icons/pi';
import OriginModal from '../components/OriginModal';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative h-screen w-screen max-w-3xl mx-auto flex flex-col items-center justify-start p-12 m-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">About</p>
        <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased my-4">Ellington Willoughby and the Mythical Squid is a psychedelic-pop six piece band from SE Portland, Oregon.
        </p>

        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased my-4">
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is as far out as it is close to home. The arrival is unexpected.
        </p>

        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased my-4">
          Live shows are local to Oregon, and are put on every couple of months with the intention of creating a space for people to let loose and have fun. They occur in a variety of venues, from house shows to festivals, and are always a good time.
        </p>
        
        <div className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased my-4">
          <p className="text-sm/5 sm:text-base/6 md:text-lg/7 subpixel-antialiased my-4">Ellington Willoughby & the Mythical Squid is:</p>
          <ul className="flex flex-col items-center justify-center">
            <li>Tim Gottgetreau</li>
            <li>Jason Gottgetreu</li>
            <li>Joshua Cloudt</li>
            <li>Jonathan Boyette</li>
            <li>Dan Miller</li>
            <li>Adam Robson</li> 
          </ul>
        </div>    
        <button onClick={openModal} className="mt-8 bg-black text-white p-2 rounded-lg">Origin Story</button>

        <div className="modal-content">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
