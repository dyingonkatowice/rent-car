import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cars from "./data/Cars";
import SelectedCarList from "./components/SelectedCarList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RentPopUp from "./components/RentPopUp";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [isVisible, isVisibleToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("next");
  const [selectedCar, setSelectedCar] = useState(null);
  const [advancedVisible, setAdvancedVisible] = useState(false);

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

  // Search Bar filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredCars([]); // Show nothing when the input is empty
    } else {
      const filtered = cars.filter((car) =>
        car.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  // Handle Car Popup
  const handleCarClick = (car) => {
    setSelectedCar(car); // Set the selected car
    setSearchQuery("");
  };

  const closePopup = () => {
    setSelectedCar(null); // Clear the selected car to close the popup
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed z-40"
          >
            <RentPopUp
              closePopup={() => isVisibleToggle(!isVisible)}
              carPhoto={recomendedCar[count].src}
              carTitle={recomendedCar[count].title}
              carYear={recomendedCar[count].year}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 z-[-2]">
        <div className="container mx-auto px-4 w-full">
          {/* Search Bar */}
          <div className="mb-8 pt-8 flex">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for cars..."
              className="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[81%] 2xl:w-[85%] p-4 rounded-lg bg-gray-700 border border-gray-400 focus:outline-none focus:border-white"
            />
            <motion.button
              onClick={() => setAdvancedVisible(!advancedVisible)}
              className="w-[40%] md:w-[30%] lg:w-[19%] xl:w-[18%] 2xl:w-[14%] p-4 rounded-lg border-white border ml-2 flex items-center justify-around"
            >
              Advanced Search
              <FaSearch />
            </motion.button>
          </div>
          {advancedVisible && (
            <>
              <p className="text-gray-500 pb-10">
                Please type something to search...
              </p>
              <div className="space-y-4 h-[500px] bg-[#1E2432] rounded-lg mb-5"></div>
            </>
          )}
          {/* Filtered Results */}
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
            !advancedVisible && (
              <p className="text-gray-500 pb-10">
                Please type something to search...
              </p>
            )
          )}
        </div>

        {/* PopUp Car */}
        {selectedCar && (
          <SelectedCarList selectedCar={selectedCar} closePopup={closePopup} />
        )}

        <div className="relative mb-12 z-0">
          <div className="overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500">
              <motion.div
                key={recomendedCar[count].title}
                initial={{
                  x: direction === "next" ? "50%" : "-50%",
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: direction === "next" ? "-50%" : "50%",
                  opacity: 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="min-w-full z-0"
              >
                <LazyLoadImage
                  src={recomendedCar[count].src}
                  alt="Car 1"
                  className="object-cover w-full h-[500px] z-1"
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
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="z-1 relative bottom-[-226px] left-[-45px] text-white drop-shadow-[10px_5px_15px_rgba(0,0,0,355)] font-bold text-2xl w-full flex justify-between"
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
