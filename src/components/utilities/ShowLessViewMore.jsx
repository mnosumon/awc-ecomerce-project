import React from "react";
import { FaPlus } from "react-icons/fa6";

const ShowLessViewMore = ({
  setShowAll,
  showAll,
  className,
  tilteClose,
  titleOpen,
}) => {
  return (
    <div className={`flex gap-5 items-center justify-center mt-5 ${className}`}>
      <span
        className={`flex items-center justify-center rounded-full h-10 w-10 border ${className}`}
      >
        <FaPlus />
      </span>
      <button
        onClick={() => setShowAll(!showAll)}
        className={`text-base font-montserrat font-bold  text-[#343438] border-b border-[#FDCA21] ${className}`}
      >
        {showAll ? { tilteClose } : { titleOpen }}
      </button>
    </div>
  );
};

export default ShowLessViewMore;
