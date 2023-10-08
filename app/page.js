import Image from 'next/image';
import React from 'react';

import pp from "../public/pp.png";

import { AiFillYoutube, AiFillMail, AiFillInstagram} from 'react-icons/ai';
import { SiNasa, SiYourtraveldottv, SiGooglemaps} from 'react-icons/si';
import { FaInfoCircle, FaSpaceShuttle } from 'react-icons/fa';
import { BsMoonStars, BsFacebook } from 'react-icons/bs';

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
      <div className="h-screen">
        <Image
        className='hero-image'
          src={pp}
          alt="Moon logo"
          layout="fill"
          objectFit="cover"
          quality={100}
          />
      </div>
          <section className="pb-10">
            <div className="text-center">
              <p className="text-4xl py-5 leading-8 p-10 text-yellow-100 italic quote-text ">
               <strong>"</strong> Envy moves the world <strong>" </strong>  
               ~ Jean Claude Revel
              </p>
            </div>
          </section>
          <section> 
            <div id="projects">
              <h3 className="text-3xl text-center text-yellow-300 py-2">Travel options</h3>
            </div>

            <div className="xl:grid xl:grid-cols-2 gap-10"> 
                <div className="mx-center text-center shadow-xl p-10 rounded-xl my-10 bg-gray-800 ">
                  <h2 className="text-lg pt-8 pb-2 font-bold text-yellow-600">Standard experience</h2>
                  <p className="py-2 p-10 text-yellow-200">
                    This package includes transfers to Cape Canaveral, a full orbit of the moon, recreational activities and tour guide assistance throughout the trip
                  </p>
                  <h4 className="py-2 text-yellow-600">More info</h4>
                  <div className="text-5xl text-yellow-600 flex justify-center gap-10 py-3">
                  <a href="https://docs.google.com/document/d/1EvHlIr3_kWS7Uitrx25_GUdi3puqbGtZ/edit" target="_blank" rel="noreferrer"><FaInfoCircle/></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer"><AiFillYoutube/></a>
                  </div>
              </div>

              <div className=" gap-10">
                <div className="mx-center text-center shadow-xl p-10 rounded-xl my-10 bg-yellow-100">
                  <h2 className="text-lg pt-8 pb-2 font-bold text-yellow-600">Luxury experience</h2>
                  <p className="py-2 p-10 text-gray-800">
                    This package includes transfers to Cape Canaveral, landing in the moon, recreational activities, tour guide assistance throughout the trip and an exclusive SPACE WALK
                  </p>

                  <h4 className="py-2 text-yellow-600">More info</h4>
                  <div className="text-5xl text-yellow-600 flex justify-center gap-10 py-3">
                    <a href="https://docs.google.com/document/d/1EvHlIr3_kWS7Uitrx25_GUdi3puqbGtZ/edit" target="_blank" rel="noreferrer"><FaInfoCircle/></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><AiFillYoutube/></a>
                  </div>
              </div>
              </div>
            </div>

            <div className="gap-10 mx-center text-center shadow-xl p-10 rounded-xl my-10 bg-gray-600 mx-xl:flex">
            <h4 className="text-2xl py-2 font-bold text-yellow-600">Check out our interactive moon map</h4>
                <div className="text-8xl text-yellow-500 flex justify-center gap-10 py-3">
                  <a href="https://view.genial.ly/65217f099526ee0012b471c8/interactive-content-mapa-basico" target="_blank" rel="noreferrer"><SiGooglemaps/></a>
                </div>
            </div>

            <div className="gap-5 mx-center text-center shadow-xl p-10 rounded-xl my-10 mx-xl:flex">
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
          <ul className="gap-5 flex flex-wrap items-center mt-3 text-3xl font-medium dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.facebook.com/profile.php?id=61552228857229&sk=about" className="mr-4 hover:underline md:mr-6 "><BsFacebook/></a>
              </li>
              <li>
                  <a href="mailto:tourismoon1@gmail.com" className="mr-4 hover:underline md:mr-6 "><AiFillMail/></a>
              </li>
              <li>
                  <a href="mailto:tourismoon1@gmail.com" className="mr-4 hover:underline md:mr-6 "><AiFillInstagram/></a>
              </li>
          </ul>
          </div>

        </footer>

    </div>
  )
}
