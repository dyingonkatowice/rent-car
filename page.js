"use client";

import Image from "next/image";
import bmw from "@/app/assets/bmw-m4.jpg";
import mercedes from "@/app/assets/mercedes-amg-gt.jpg";
import audi from "@/app/assets/audi-rs7.jpg";
import porsche from "@/app/assets/porsche-911.jpg";

export default function Home() {
  return (
    <main className="container mx-auto px-4 w-[1300px]">
      
      {/* Search Bar */}
      <div className="mb-8 pt-8">
        <input
          type="text"
          placeholder="Search for cars..."
          className="w-full p-4 rounded-lg bg-[#1E2432] border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Responsive Design Classes */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .absolute.bottom-4 {
            bottom: unset;
            top: 50%;
            transform: translateY(-50%);
          }
          .absolute.bottom-4 button {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }
        
        @media (min-width: 1536px) {
          .container {
            max-width: 1536px;
          }
        }

        @media (min-width: 2048px) {
          .container {
            max-width: 1920px;
          }
        }
      `}</style>

      {/* Carousel */}
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-xl">
          <div className="flex transition-transform duration-500">
            <div className="min-w-full">
              <Image
                src={mercedes}
                alt="Car 1"
                width={1200}
                height={600}
                className="object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>

        {/* Image Overlay Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button className="px-4 py-2 text-white font-bold bg-[#121829] hover:bg-black rounded transition">
            More Info
          </button>
          <button className="px-6 py-2 bg-blue-900 font-bold text-xl uppercase hover:bg-blue-700 text-white rounded transition">
            Rent
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
          <button className="bg-black/50 p-3 rounded-full hover:bg-black/75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <span className="relative bottom-[-226px] left-[-45px] text-black font-bold text-2xl w-full flex justify-between">
          Mercedes AMG GT
          </span>
          <button className="bg-black/50 p-3 rounded-full hover:bg-black/75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Similar Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E2432] rounded-lg p-4">
          <Image
            src={bmw}
            alt="Benzer Araba 1"
            width={400}
            height={300}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">BMW M4 Competition</h3>
          <p className="text-gray-400">2023 Model - Automatic</p>
        </div>

        <div className="bg-[#1E2432] rounded-lg p-4">
          <Image
            src={audi}
            alt="Benzer Araba 2"
            width={400}
            height={300}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">Audi RS7 Sportback</h3>
          <p className="text-gray-400">2023 Model - Automatic</p>
        </div>

        <div className="bg-[#1E2432] rounded-lg p-4">
          <Image
            src={porsche}
            alt="Benzer Araba 3"
            width={400}
            height={300}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">Porsche 911 GT3</h3>
          <p className="text-gray-400">2023 Model - Automatic</p>
        </div>
      </div>
    </main>
  );
}
