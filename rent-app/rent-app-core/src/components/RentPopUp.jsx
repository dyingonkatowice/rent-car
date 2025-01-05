import React from "react";
<<<<<<< Updated upstream
import { motion } from "motion/react";

export default function RentPopUp() {
  return <div>RentPopUp</div>;
=======
// import { motion, AnimatePresence } from "framer-motion";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function RentPopUp({ closePopup, carPhoto, carTitle, carYear }) {
  return (
    <>
      <div className="bg-[#00000016] w-screen h-screen flex fixed z-40 top-0 left-0">
        <div className="w-[90vw] h-[60vh] md:h-[70vh] xl:h-[70vh] xl:w-[70vw] bg-white m-auto">
          <div className="text-black w-[100%]">
            <button>
              <IoMdCloseCircleOutline
                onClick={closePopup}
                size={30}
                className="m-2"
              />
            </button>
          </div>
          <div className="flex justify-around h-[70%]">
            <div className="p-4 lg:pl-4 lg:p-0 w-[50%] md:w-[25%]">
              <LazyLoadImage
                src={carPhoto}
                className="w-[100%]"
              ></LazyLoadImage>
              <h1 className="text-black text-2xl font-semibold w-auto text-center">
                {carTitle}
              </h1>
              <ul className="text-black text-xl font-semibold p-2">
                <li>Year: {carYear}</li>
                <hr />
                <li>Gearbox: </li>
                <hr />
                <li>Miles: </li>
                <hr />
              </ul>
            </div>
            <div className="p-4 lg:pl-4 lg:p-0 w-[50%] md:w-[25%]">
              <h1 className="text-black text-2xl font-semibold w-auto text-center">
                FORM
              </h1>
              <ul className="text-black text-xl font-semibold p-2">
                <li>Name {carYear}</li>

                <li>Last Name</li>

                <li>E-mail </li>
              </ul>
            </div>
            <div className="p-4 lg:pl-4 lg:p-0 w-[50%] md:w-[25%]">
              <h1 className="text-black text-2xl font-semibold w-auto text-center">
                CALLENDAR
              </h1>
              <ul className="text-black text-xl font-semibold p-2"></ul>
            </div>
          </div>
          <div className="text-black text-2xl m-4">BUTTONS</div>
        </div>
      </div>
    </>
  );
>>>>>>> Stashed changes
}
