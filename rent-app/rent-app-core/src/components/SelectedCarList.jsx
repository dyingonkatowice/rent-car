import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function SelectedCarList({ selectedCar, closePopup }) {
  if (!selectedCar) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <button className="text-black">
          <IoMdCloseCircleOutline onClick={closePopup} />
        </button>
        <img
          src={selectedCar.src}
          alt={selectedCar.title}
          className="w-full rounded mb-4"
        />

        <h3 className="text-2xl text-black font-bold">{selectedCar.title}</h3>
        <p className="text-gray-700 mt-2"></p>
        <p className="text-gray-500 mt-1">
          {selectedCar.year} - {selectedCar.gearbox}
        </p>
      </div>
    </div>
  );
}
