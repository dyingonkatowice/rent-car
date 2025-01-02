import React, { useState, useEffect } from "react";
import { easeIn, motion } from "motion/react";
import cars from "./data/Cars";
import SelectedCarList from "./components/SelectedCarList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RentPopUp from "./components/RentPopUp";

export default function Home() {
  const [isVisible, isVisibleToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [selectedCar, setSelectedCar] = useState(null);

  // Function to go to the next recommended car
  const next = () => {
    setDirection("next");
    setCount((prevCount) => (prevCount + 1) % recomendedCar.length); // Loop back to the first car
  };

  // Function to go to the previous recommended car
  const prev = () => {
    setDirection("prev");
    setCount((prevCount) =>
      prevCount === 0 ? recomendedCar.length - 1 : prevCount - 1
    );
  };
  const recomendedCar = cars.filter((car) => car.recomended);

  // Search Bar filtering (chatgpt helped)

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (e) => {
    //getting Input
    const query = e.target.value;

    //Setting it for useState ( what you type is set there )
    setSearchQuery(query);

    // Filter cars only if there is text in the search field
    if (query.trim() === "") {
      //If there is no text after triming then it displays nothing( it displays whole list without it )
      setFilteredCars([]); // Show nothing when the input is empty
    } else {
      //filtering cars setting text from input to lover case and text in object, so when it includes the text it can be displyed
      const filtered = cars.filter((car) =>
        car.title.toLowerCase().includes(query.toLowerCase())
      );

      //setting displayed text as filtered value
      setFilteredCars(filtered);
    }
  };

  // Showing car popUp

  const handleCarClick = (car) => {
    setSelectedCar(car); // Set the selected car
    setSearchQuery("");
  };

  const closePopup = () => {
    setSelectedCar(null); // Clear the selected car to close the popup
  };

  return (
    <>
      {isVisible && (
        <RentPopUp closePopup={() => isVisibleToggle(!isVisible)} />
      )}
      <main className="container mx-auto px-4">
        <div className="container mx-auto px-4 w-full">
          {/* Search Bar */}
          <div className="mb-8 pt-8">
            {/* Value which you type in ( basic one from useState) */}
            {/* On change ( when you type it uses function to filter) */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for cars..."
              className="w-full p-4 rounded-lg bg-[#1E2432] border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Filtered Results */}

          {/* This is pretty basic. You just use filtered cars that gets set on each Change in onChange={handleSeacrchChange} */}
          {searchQuery && filteredCars.length > 0 ? (
            <ul className="space-y-4">
              {filteredCars.map((car) => (
                <li
                  onClick={() => handleCarClick(car)}
                  key={car.id}
                  className="bg-[#1E2432] rounded-lg p-3 m-2"
                >
                  <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                  <p className="text-gray-400 pb-2">
                    {String(car.year)} - {car.gearbox}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            // Do nothing or show a message when input is empty
            <p className="text-gray-500 pb-10">
              Please type something to search...
            </p>
          )}
        </div>

        {/* PopUp Car */}

        {selectedCar && (
          <SelectedCarList selectedCar={selectedCar} closePopup={closePopup} />
        )}

        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500">
              <motion.div
                key={recomendedCar[count].title}
                initial={{
                  x: direction === "next" ? "50%" : "-50%",
                  opacity: 0,
                }} // Start from opposite side based on direction
                animate={{ x: 0, opacity: 1 }} // Animate to the normal position
                exit={{ x: direction === "next" ? "-50%" : "50%", opacity: 0 }} // Exit to the opposite side
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="min-w-full"
              >
                <LazyLoadImage
                  src={recomendedCar[count].src}
                  alt="Car 1"
                  className="object-cover w-full h-[500px]"
                />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button className="px-4 py-2 text-white font-bold bg-[#000000] hover:bg-black rounded transition">
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
            <motion.span
              key={recomendedCar[count].title}
              initial={{ opacity: 0, y: "-40%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: {
                  duration: 0.3,
                },
              }}
              exit={{ opacity: 0, trantition: { duration: 0.3 } }}
              className="relative bottom-[-226px] left-[-45px] text-white drop-shadow-[10px_5px_15px_rgba(0,0,0,355)] font-bold text-2xl w-full flex justify-between"
            >
              {recomendedCar[count].title}
            </motion.span>
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
        {/* This caused an error */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              onClick={() => setCount(car.id)}
              key={index}
              className={`bg-[#0d0d0d] rounded-lg p-4 ${
                car.id === recomendedCar[count]?.id
                  ? "border-2 border-white"
                  : "border-2 border-black"
              }`}
            >
              <LazyLoadImage
                src={car.src}
                alt={car.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{car.title}</h3>
              <p className="text-gray-400">{`${car.year} Model - ${car.gearbox}`}</p>
            </div>
          ))}
        </div> */}

        {/* Added || to select both the ones in galley and the ones in map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              onClick={() => {
                setSelectedCar(car); // Set the selected car
              }}
              key={car.id}
              className={`bg-[#0d0d0d] rounded-lg p-4 ${
                selectedCar?.id === car.id ||
                car.id === recomendedCar[count]?.id
                  ? "border-2 border-white"
                  : "border-2 border-black"
              }`}
            >
              <LazyLoadImage
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
