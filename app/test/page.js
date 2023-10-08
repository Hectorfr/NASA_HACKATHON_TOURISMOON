import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import pp from "../../public/pp.png";

import { AiFillYoutube } from 'react-icons/ai';
import { SiNasa, SiYourtraveldottv} from 'react-icons/si';
import { FaSpaceShuttle } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';

export default function Home() {
  return (
    <div className='bg-gray-900'>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <link rel="icon" href="/icon.ico" />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="font-mono fixed text-gray-200 left-0 top-0 flex w-full justify-center  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:pt-2 lg:pb-2">
          The moon is at the tip of your fingers&nbsp;
        </p>
      </div>
      <div className='hero-container w-screen h-[100vh] md:h-[500px]'>
        <div className='bg-blue-400 w-full max-w-xl mx-auto mt-[280px] text-center'>
          <h1>rgdgrddrg
          </h1>

        </div>


      </div>
          <section className="pb-10">
            <div className="text-center">
              <h1 className="text-5xl text-yellow-300 md:text-6xl">
                Tourismoon 
              </h1>
              <h3 className="text-2xl py-2 text-yellow-200 md:text-3xl">
                Your space dream come true
              </h3>
              <p className="text-md py-5 leading-8 max-w-lg mx-auto p-10 text-yellow-100 md:text-xl">
                What you thought was impossible is alredy here, <span className="text-yellow-200">space travel</span> is at your reach. 
              </p>
            </div>
          </section>
          <section> 
            <div id="projects">
              <h3 className="text-3xl text-center text-yellow-300 py-2">Travel options</h3>
            </div>

            <div className="xl:flex gap-10">
                <div className="mx-center text-center shadow-xl p-10 rounded-xl my-10 border-yellow-800 flex-1">
                  <h2 className="text-lg pt-8 pb-2 font-bold text-yellow-600">Standard experience</h2>
                  <p className="py-2 p-10 text-yellow-200">
                    This package includes transfers to Cape Canaveral, landing in the moon, recreational activities, tour guide assistance throughout the trip and an exclusive SPACE WALK
                  </p>
                  <h4 className="py-2 text-yellow-600">Video examples</h4>
                  <div className="text-5xl text-yellow-600 flex justify-center gap-10 py-3">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><AiFillYoutube/></a>
                  </div>
              </div>

              <div className="xl:flex gap-10 flex-1">
                <div className="mx-center text-center shadow-xl p-10 rounded-xl my-10 border-yellow-800">
                  <h2 className="text-lg pt-8 pb-2 font-bold text-yellow-600">Luxury experience</h2>
                  <p className="py-2 p-10 text-yellow-200">
                    This package includes transfers to Cape Canaveral, a full orbit of the moon, recreational activities and tour guide assistance throughout the trip
                  </p>

                  <h4 className="py-2 text-yellow-600">Video examples</h4>
                  <div className="text-5xl text-yellow-600 flex justify-center gap-10 py-3">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><AiFillYoutube/></a>
                  </div>
              </div>
              </div>
            </div>
            <div className='text-white text-center'>
              <Link href={'https://waynabox.com'}>
                <button>click me</button>
                <h2>hola</h2>
              </Link>
             
              </div>

            <div className="gap-10 mx-center text-center shadow-xl p-10 rounded-xl my-10 border-yellow-800 mx-xl:flex">
            <h4 className="py-2 font-bold text-yellow-600">Partnership</h4>
                <div className="text-8xl text-yellow-500 flex justify-center gap-10 py-3">
                  <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer"><SiNasa/></a>
                  <a href="https://www.spacex.com/" target="_blank" rel="noreferrer"><SiYourtraveldottv/></a>
                  <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer"><FaSpaceShuttle/></a>
                </div>
            </div>
          </section>
    </main>

    <footer className="border-t-4 border-yellow-900 ">
          <div className="w-full mx-auto max-w-screen-xl p-4 text-yellow-200 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center">© 2023 <a className="hover:underline">Tourismoon</a>. All Rights Reserved.
            </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">About us</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/hector-fr/" target="_blank" rel="noreferrer" className="hover:underline"></a>
              </li>
          </ul>
          </div>

        </footer>

    </div>
  )
}
