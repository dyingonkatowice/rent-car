import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
                className="m-2 md:m-3 lg:m-4"
              />
            </button>
          </div>
          <div className="pl-4 w-[700px]">
            <LazyLoadImage src={carPhoto} className="w-auto"></LazyLoadImage>
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
        </div>
      </div>
    </>
  );
}
