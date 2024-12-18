import React from "react";

const WrapperHeading = ({ className, title }) => {
  return (
    <h3
      className={`text-xl text-[#343438] font-montserrat font-bold ${className}`}
    >
      {title}
    </h3>
  );
};

export default WrapperHeading;
