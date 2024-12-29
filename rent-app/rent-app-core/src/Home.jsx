// src/Home.jsx
import React, { useState } from "react";
import { motion } from "motion/react";

import bmw from "./assets/cars/bmw-m4.jpg";
import mercedes from "./assets/cars/mercedes-amg-gt.avif";
import audi from "./assets/cars/audi-rs7.webp";
import porsche from "./assets/cars/porsche-911.jpg";
import RentPopUp from "./components/RentPopUp";

export default function Home() {
  const [isVisible, isVisibleToggle] = useState(false);
  const [count, setCount] = useState(0);

  const cars = [
    {
      src: mercedes,
      title: "Mercedes AMG GT",
      gearbox: "manual",
      year: 2024,
      recomended: true,
    },
    {
      src: bmw,
      title: "BMW M4 Competition",
      gearbox: "manual",
      year: 2021,
      recomended: true,
    },
    {
      src: audi,
      title: "Audi RS7 Sportback",
      gearbox: "manual",
      year: 2018,
      recomended: true,
    },
    {
      src: porsche,
      title: "Porsche 911 GT3",
      gearbox: "automatic",
      year: 2014,
      recomended: true,
    },
  ];

  // Function to go to the next recommended car
  const next = () => {
    setCount((prevCount) => (prevCount + 1) % recomendedCar.length); // Loop back to the first car
  };

  // Function to go to the previous recommended car
  const prev = () => {
    setCount((prevCount) =>
      prevCount === 0 ? recomendedCar.length - 1 : prevCount - 1
    );
  };
  const recomendedCar = cars.filter((car) => car.recomended);

  return (
    <>
      {isVisible && <RentPopUp />}

      <main className="container mx-auto px-4 w-[1300px]">
        <div className="mb-8 pt-8">
          <input
            type="text"
            placeholder="Search for cars..."
            className="w-full p-4 rounded-lg bg-[#1E2432] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500">
              <div className="min-w-full">
                <img
                  src={recomendedCar[count].src}
                  alt="Car 1"
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button className="px-4 py-2 text-white font-bold bg-[#121829] hover:bg-black rounded transition">
              More Info
            </button>
            <button
              onClick={() => isVisibleToggle(!isVisible)}
              className="px-6 py-2 bg-blue-900 font-bold text-xl uppercase hover:bg-blue-700 text-white rounded transition"
            >
              Rent
            </button>
          </div>

          <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
            <button
              onClick={prev}
              className="bg-black/50 p-3 rounded-full hover:bg-black/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <span className="relative bottom-[-226px] left-[-45px] text-black font-bold text-2xl w-full flex justify-between">
              {recomendedCar[count].title}
            </span>
            <button
              onClick={next}
              className="bg-black/50 p-3 rounded-full hover:bg-black/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-[#1E2432] rounded-lg p-4">
              <img
                src={car.src}
                alt={car.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{car.title}</h3>
              <p className="text-gray-400">{`${car.year} Model - ${car.gearbox}`}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
