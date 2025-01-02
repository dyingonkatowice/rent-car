import React from "react";
import { motion } from "motion/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function RentPopUp({ closePopup }) {
  return (
    <>
      <div className="bg-[#00000016] w-screen h-screen flex absolute z-20">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          transition={{ duration: 1, ease: [0, 0.2, 0.5, 1] }}
          animate={{ opacity: 1, y: 0, duration: 0.7, ease: "easeIn" }}
          className="w-[90vw] h-[60vh] md:h-[70vh] xl:h-[70vh] xl:w-[70vw] bg-white m-auto"
        >
          <div className="text-black  w-[100%]">
            <button>
              <IoMdCloseCircleOutline
                onClick={closePopup}
                size={30}
                className="m-2 md:m-3 lg:m-4"
              />
            </button>
          </div>
          <div></div>
        </motion.div>
      </div>
    </>
  );
}
