import React from "react";

const SubHeading = ({ className, title }) => {
  return (
    <h4
      className={`text-base md:text-lg font-lato font-normal  leading-normal text-[#343438] mb-2 ${className}`}
    >
      {title}
    </h4>
  );
};

export default SubHeading;
