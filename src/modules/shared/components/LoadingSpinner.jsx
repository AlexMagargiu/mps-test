import React from "react";

const Spinner = ({ size, color }) => {
  return (
    <div
      className={`w-[${size}] h-[${size}] border-[4px] border-[${color}] rounded-[50%] animate-spin duration-1000 linear infinite`}
    />
  );
};

export default Spinner;
